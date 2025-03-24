import FirstScreen from '../FirstScreen/FirstScreen'
import Slider from '../Slider/Slider'
import Info from '../Info/Info'
import Blog from '../Blog/Blog'
import Community from '../Community/Community'
import './main.scss'
import arrivals from './arrivals.json'

export default function Main() {
    return (
        <main>
            <FirstScreen/>
            <Slider title="New Arrivals" content={arrivals}/>
            {/* <Slider title="Best Sellers" content={slider.bestSellers.content}/> */}
            <Info/>
            <Blog/>
            <Community/>
        </main>
    )
}