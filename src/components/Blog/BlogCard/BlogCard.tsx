import './blogCard.scss'
export default function BlogCard() {
    return (
        <div className="blog_content">
            <img src="/image/blog_img.jpg" alt="item" />
            <div className="card_text">
                <h2>Cracking the Coconut Code</h2>
                <p>Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams </p>
                <button>Read More</button>
            </div>
        </div>
    )
}