import { blogData } from '../../data/blogData';
import './blogs.scss';

const BlogPage = () => {
    return (
        <>
            <h3>blogs and Insights</h3>
            <div className="Main_container">
                <div className='blog-container'>
                    {
                        blogData.map((blog, idx) => {
                            return (
                                <div key={idx} className='blog_container'>
                                    <img src={blog.image} alt="" />
                                    <h4>{blog.title}</h4>
                                    <p>{blog.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BlogPage;