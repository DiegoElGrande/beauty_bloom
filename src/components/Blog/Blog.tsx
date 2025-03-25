import './blog.scss'
import BlogCard from './BlogCard/BlogCard'
export default function Blog() {
    return (
        <div className="blog container">
            <div className="title">
                <h2>on the blog</h2>
                <button className='link'>See All</button>
            </div>
            <div className="blog_card">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <img src="/public/image/icons/slider_indicator.svg" alt="circle" />
        </div>
    )
}