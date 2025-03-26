import './header.scss'
import { useState } from 'react'
import { createPortal } from 'react-dom';

type AccountProps = {
    closeButton: () => void;
};

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header>
            <div className="container">
                <div className='logo'>
                    <h2 className='pink_logo'>Bloom</h2>
                    <h2>Beauty</h2>
                </div>
                <nav>
                    <ul>
                        <li><button className='link'>Shop all</button></li>
                        <li><button className='link'>Bestsellers</button></li>
                        <li><button className='link'>Collection</button></li>
                        <li><button className='link'>about as</button></li>
                        <li><button className='link'>blog</button></li>
                    </ul>
                </nav>
                <ul className='top_bar_menu'>
                    <li>
                        <img src="/image/icons/search.svg" alt="search" />
                        <p>search</p>
                    </li>
                    <li onClick={() => setOpen(!open)}>
                        <img src="/image/icons/account.svg" alt="account" />
                        <p>account</p>
                    </li>
                    <li >
                        <img src="/image/icons/cart.svg" alt="cart" />
                        <p>cart</p>
                    </li>
                </ul>
                {open && createPortal(<Account closeButton={() => setOpen(!open)} />, document.body)}
            </div>
        </header>
    )
}

function Account({ closeButton }: AccountProps) {

    return (
        <div className="overwrap">
            <div className="menu_account">
                <img src="/image/icons/close.svg" alt="close" onClick={closeButton} />
                <div className="login">
                    <h2>Log in</h2>
                    <p>Please enter your e-mail and password</p>
                    <input type="text" name="e-mail" id="userName" placeholder='Email' />
                    <input type="password" name="password" id="password" placeholder='Password' />
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