import './slider.scss'
import Card from '../Card/Card'
import type { CartProps } from '../../features/cartSlice'


type SliderProps = {
    title: string,
    content: CartProps[]
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
                {content.map((obj: CartProps, index: number) => <Card key={index} {...obj} />)}
            </div>
            <button className="slider_btn right">&#10095;</button>
        </div>
    )
}