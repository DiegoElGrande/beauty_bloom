import './card.scss'

export default function Card({image, title_card, description, price}) {
    return (
        <div className="card_item">
            <img className='card_item_image' src={image} alt="item" />
            <div className="card_content">
                <div className="item_info">
                    <strong>{title_card}</strong>
                    <div className="raiting">
                        <img src="/src/image/icons/star.svg" alt="star" />
                        <img src="/src/image/icons/star.svg" alt="star" />
                        <img src="/src/image/icons/star.svg" alt="star" />
                        <img src="/src/image/icons/star.svg" alt="star" />
                        <img src="/src/image/icons/star.svg" alt="star" />
                        <p>(5)</p>
                    </div>
                    <p className='description'>{description}</p>
                    <p className='price'>{price}$</p>
                </div>
                <button>Add to Bag</button>
            </div>
        </div>
    )
}