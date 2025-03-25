import './header.modules.scss'
import Account from './Account/Account'
import { useState } from 'react'

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
                        <img src="/public/image/icons/search.svg" alt="search" />
                        <p>search</p>
                    </li>
                    <li onClick={() => setOpen(!open)}>
                        <img src="/public/image/icons/account.svg" alt="account" />
                        <p>account</p>
                    </li>
                    <li >
                        <img src="/public/image/icons/cart.svg" alt="cart" />
                        <p>cart</p>
                    </li>
                </ul>
                {open && <Account closeButton={() => setOpen(!open)} />}
            </div>
        </header>
    )
}