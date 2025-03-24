import './slider.scss'
import Card from '../Card/Card'

export default function Slider({title, content}) {
    
    return (
        <div className="slider container">
            <div className="title">
                <h2>{title}</h2>
                <button className='link'>See All</button>
            </div>
            <button className="slider_btn left">&#10094;</button>
            <div className="slider_items">
                {content.map((obj, index) => <Card key={index} {...obj} />)}
            </div>
            <button className="slider_btn right">&#10095;</button>
        </div>
    )
}