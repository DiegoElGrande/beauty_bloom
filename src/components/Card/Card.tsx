import './card.scss'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cartSlice'
import type { CartProps } from '../../features/cartSlice'

export default function Card({id, image, title_card, description, price}: CartProps) {
    const dispatch = useDispatch();

    return (
        <div className="card_item">
            <img className='card_item_image' src={image} alt="item" />
            <div className="card_content">
                <div className="item_info">
                    <strong>{title_card}</strong>
                    <div className="raiting">
                        {
                        Array.from({length: 5}).map((_, index) => <img src="/image/icons/star.svg" key={`star-${index}`} alt="star" />)
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