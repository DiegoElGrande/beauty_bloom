import './card.scss'

type CardItem = {
    image: string
    title_card: string
    description: string
    price: number
}

export default function Card({image, title_card, description, price}: CardItem) {
    return (
        <div className="card_item">
            <img className='card_item_image' src={image} alt="item" />
            <div className="card_content">
                <div className="item_info">
                    <strong>{title_card}</strong>
                    <div className="raiting">
                        {
                        Array({length: 5}).map(() => <img src="/src/assets/image/icons/star.svg" alt="star" />)
                        }
                        
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