import './footer.modules.scss'

export default function Footer() {
    const linkList = ['instagram', 'facebook', 'twitter', 'pinterest', 'telegram']
    return (
        <footer>
            <div className="container column">
                <div className="icons">
                    {linkList.map(( x ) => <img src={`/image/icons/${x}.svg`} height={30} alt={`${x}`} /> )}
                </div>
                <div class="footer_content">
                    <div className="contact">
                        <h2>Bloom Beauty</h2>
                        <span>Discover nature's beauty with our natural care products.</span>
                        <button className='link'>+7 999 123 45 67</button>
                        <button className='link'>beautybloom@mail.ru</button>
                        <button className='link'>Planet Earth</button>
                    </div>
                    <div className="help">
                        <p>Help</p>
                        <button className='link'>Contact us</button>
                        <button className='link'>FAQ</button>
                        <button className='link'>Shoppping returns</button>
                    </div>
                    <div className="account">
                        <p>my account</p>
                        <button className='link'>Addresses</button>
                        <button className='link'>Orders status</button>
                        <button className='link'>Wishlist</button>
                    </div>
                    <div className="custom_care">
                        <p>Custom care</p>
                        <button className='link'>About us</button>
                        <button className='link'>Blog</button>
                    </div>
                    <div className="sign_up">
                        <p>sign up for emails</p>
                        <span>Stay informed, subscribe to our newsletter now!</span>
                        <input type="text" placeholder='Email' />
                        <button className='link'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="license">
                <p>© 2024 Bloom Beauty.</p>
                <div className="detail">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    )
}