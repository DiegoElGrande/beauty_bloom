import './community.scss'

export default function Community() {
    return (
        <div className="community container">
            <div className="title">
                <h2>Share  how you blossomed with #bloombeauty</h2>
                <button className='link'>See All</button>
            </div>
            <div className="image_items">
                {
                    Array.from({ length: 8 }).map((_, index) => <img key={index} src="/image/community/image_1.jpg" alt="" />)
                }
            </div>
            <button>Follow Us</button>
        </div>
    )
}