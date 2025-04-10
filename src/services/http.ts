

export class Http {
    request(url: string, options?: RequestInit) {
        return fetch(url, options).then(res => {
            if (!res.ok) {
                throw res;
            }
            return res.json()
        });
    }
}