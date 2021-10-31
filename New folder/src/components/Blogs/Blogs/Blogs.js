import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        fetch('https://scary-castle-42994.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    return (
        <div className="blogs-div">
            <div className="container">

                <h2 className="py-5 text-info">This is Blogs</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                        ></Blog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;