import './info.modules.scss'
export default function Info() {
    return (
        <div className="info container">
            <div className="post">
                <div className="info_content">
                    <h1>Blossom Glow Kit</h1>
                    <p>Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types. Vegan, cruelty-free, eco-friendly.</p>
                    <ul className="tag_list">
                        <li># GreatGift</li>
                        <li># AntiAging</li>
                        <li># GreatGift</li>
                        <li># Ingredients</li>
                        <li># Ingredients</li>
                    </ul>
                    <div className="navigation">
                        <button className="shop_now">Shop Now</button>
                        <button className="explore">Explore More</button>
                    </div>
                </div>
                <img src="/image/post_image.jpg" alt="post_img" />
            </div>
            <div className="post reverse">
                <div className="info_content">
                    <h1>Floral Essence Masks Sets</h1>
                    <p>Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine.</p>
                    <ul className="tag_list">
                        <li># GreatGift</li>
                        <li># AntiAging</li>
                        <li># GreatGift</li>
                        <li># Ingredients</li>
                        <li># Ingredients</li>
                    </ul>
                    <div className="navigation">
                        <button className="shop_now">Shop Now</button>
                        <button className="explore">Explore More</button>
                    </div>
                </div>
                <img src="/image/post_image2.jpg" alt="post_img" />
            </div>
        </div>
    )
}