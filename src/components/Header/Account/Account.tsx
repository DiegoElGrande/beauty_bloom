import './account.modules.scss'
import { useState } from 'react'

export default function Account({ closeButton }) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="overwrap">
            <div className="menu_account">
                <img src="/image/icons/close.svg" alt="close" onClick={closeButton} />
                <div className="login">
                    <h2>Log in</h2>
                    <p>Please enter your e-mail and password</p>
                    <input type="text" name="e-mail" id="userName" placeholder='Email' onChange={text => setUserName(text.target.value)} value={userName} />
                    <input type="password" name="password" id="password" placeholder='Password' onChange={text => setPassword(text.target.value)} value={password} />
                    <button>Log in</button>
                    <p id='or'>or</p>
                    <button className="google" >Continue with Google</button>
                    <p>Forgot your password? <button>Recover password</button></p>
                    <p>New to Bloom Beauty? <button>Create an account</button></p>
                </div>
            </div>
        </div>
    )
}