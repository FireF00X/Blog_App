import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    let [author, setAuthor] = useState('mohamed');
    let [isPending, setIsPending] = useState(false);
    let history = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true)
        fetch('http://localhost:8000/blog', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            history('/')
        })
    }
    return (
        <div className='create'>
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="ahmed">Ahmed</option>
                    <option value="mohamed">Mohamed</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Loading...</button>}
            </form>
        </div>
    )
}

export default Create