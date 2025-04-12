import './header.scss'
import { useState } from 'react'
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../features/cart/cartSlice';
import { RootState } from '../../app/store';
import type { CartProps } from '../../features/cart/cartSlice';

type FunctionProps = {
    closeButton: () => void;
};


export default function Header() {
    const [accountView, setAccountView] = useState(false)
    const [cartView, setCartView] = useState(false)

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
                    <li onClick={() => setAccountView(!accountView)}>
                        <img src="/image/icons/account.svg" alt="account" />
                        <p>account</p>
                    </li>
                    <li onClick={() => setCartView(!cartView) }>
                        <img src="/image/icons/cart.svg" alt="cart" />
                        <p>cart</p>
                    </li>
                    {accountView && createPortal(<Account closeButton={() => setAccountView(!accountView)} />, document.body)}
                    {cartView && createPortal(<Cart closeButton={() => setCartView(!cartView)} />, document.body)}
                </ul>
            </div>
        </header>
    )
}

function Account({ closeButton }: FunctionProps) {
    
    return (
        <div className="overwrap">
            <div className="menu_account">
                <img src="/image/icons/close.svg" alt="close" onClick={closeButton} />
                <div className="login">
                    <form action="login" >
                        <h2>Log in</h2>
                        <p>Please enter your e-mail and password</p>
                        <input type="text" name="e-mail" id="userName" placeholder='Email' />
                        <input type="password" name="password" id="password" placeholder='Password' />
                        <button type="submit">Log in</button>
                    </form>
                    <p id='or'>or</p>
                    <button className="google" >Continue with Google</button>
                    <p>Forgot your password? <button>Recover password</button></p>
                    <p>New to Bloom Beauty? <button>Create an account</button></p>
                </div>
            </div>
        </div>
    )
}

function Cart({ closeButton }: FunctionProps) {
    const cartItem : CartProps[] = useSelector( (state: RootState) => state.cart.items);
    return (
        <div className="overwrap">
            <div className="cart_menu">
                <div className="cart_title">
                    <h2>Cart</h2>
                    <img src="/image/icons/close.svg" onClick={closeButton} height={20} alt="close_cart_button" />
                </div>
                <div className="cart_content">
                    {cartItem.length > 0 && cartItem.map((item) => <CartItem key={item.id} {...item} />)}
                </div>
                <div className="order">
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>$23.00</p>
                    </div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
    
}

function CartItem({id, title_card, price, image }: CartProps) {
    const dispatch = useDispatch();
    return (
        <article>
            <img src={image} alt="item" />
            <div className="cart_item">
                <h4>{title_card}</h4>
                <p>${price}</p>
                <div className="cart_count">
                    <div className="count">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                    <button className='close_button' onClick={() => dispatch(removeItem(id))}></button>
                </div>
            </div>
        </article>
    )
}