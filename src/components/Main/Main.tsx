import FirstScreen from '../FirstScreen/FirstScreen'
import Slider from '../Slider/Slider'
import Info from '../Info/Info'
import Blog from '../Blog/Blog'
import Community from '../Community/Community'
import './main.scss'
import product from '../product.json'

export default function Main() {
    return (
        <main>
            <FirstScreen/>
            <Slider title="New Arrivals" content={product.filter(item => item.new)}/>
            <Slider title="Best Sellers" content={product.filter(item => item.bestseller)}/>
            <Info/>
            <Blog/>
            <Community/>
        </main>
    )
}