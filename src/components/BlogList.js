import React from 'react';
import { Link } from 'react-router-dom';


function BlogList({ blog, title }) {

    return (
        <div className='content'>
            <h1>{title}</h1>
            {blog.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2 >{blog.title}</h2>
                        <p>{blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;