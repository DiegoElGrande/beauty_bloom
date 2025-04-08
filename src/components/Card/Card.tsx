import './card.scss'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cartSlice'

type CardItem = {
    id: number
    image: string
    title_card: string
    description: string
    price: number
}

export default function Card({id, image, title_card, description, price}: CardItem) {
    const dispatch = useDispatch();

    return (
        <div className="card_item">
            <img className='card_item_image' src={image} alt="item" />
            <div className="card_content">
                <div className="item_info">
                    <strong>{title_card}</strong>
                    <div className="raiting">
                        {
                        Array.from({length: 5}).map(() => <img src="/image/icons/star.svg" alt="star" />)
                        }
                        <p>(5)</p>
                    </div>
                    <p className='description'>{description}</p>
                    <p className='price'>{price}$</p>
                </div>
                <button onClick={() => dispatch(addItem({id, title_card, price, image}))}>Add to Bag</button>
            </div>
        </div>
    )
}