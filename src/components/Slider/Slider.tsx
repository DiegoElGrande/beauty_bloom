import './slider.scss'
import Card from '../Card/Card'

type CardItem = {
    image: string,
    title_card: string,
    description: string,
    price: number,
}

type SliderProps = {
    title: string,
    content: CardItem[]
}


export default function Slider({title, content}: SliderProps) {
    
    return (
        <div className="slider container">
            <div className="title">
                <h2>{title}</h2>
                <button className='link'>See All</button>
            </div>
            <button className="slider_btn left">&#10094;</button>
            <div className="slider_items">
                {content.map((obj: CardItem, index: number) => <Card key={index} {...obj} />)}
            </div>
            <button className="slider_btn right">&#10095;</button>
        </div>
    )
}