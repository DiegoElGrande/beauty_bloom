import {deleteRefreshToken, getRefreshToken, setRefreshToken} from './utils/refresh-token-storage.ts'

// type User = {
//     id: number;
// }

const EXPIRES_IN_MINS = 1;

class DummyApi {
    private host: string;
    // private user: User | null = null;
    private token: string | null = null;

    constructor(host: string) {
        this.host = host;
    }

    private request(path: any, options: any) {

        return fetch(`${this.host}${path}`, options)
            .then(res => {
                if (!res.ok) {
                    throw res;
                }
                return res.json();
            })
    }

    private get(url: string, options: any) {
        return this.request(url, {...options, method: 'GET'});
    }

    private post(url: string, options: any) {
        return this.request(url, {...options, method: 'POST', body: JSON.stringify(options.body)});
    }

    refreshToken() {
        return this.post('auth/refresh', {
            body: {
                refreshToken: getRefreshToken(),
                expiresInMins: EXPIRES_IN_MINS,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            const {accessToken, refreshToken} = response;
            setRefreshToken(refreshToken)
            this.token = accessToken;
            return response;
        });
    }

    login({username, password}: { username: string; password: string }) {
        return this.post(`auth/login`, {
            body: {
                username,
                password,
                expiresInMins: EXPIRES_IN_MINS,
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            const {accessToken, refreshToken, ...userData} = response;
            setRefreshToken(refreshToken)
            this.token = accessToken;
            return userData;
        })
    }

    logout() {
        deleteRefreshToken();
        this.token = null;
    }

    async getMe() {
        if (!this.token) {
            await this.refreshToken()
        }
        return await this.get(`auth/me`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        });
    }

    getCart(userId: number) {

        return this.get(
            `carts/user/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                }
            }
        )
    }
}

export default new DummyApi('https://dummyjson.com/');