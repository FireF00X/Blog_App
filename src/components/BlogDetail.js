import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch.js'

function BlogDetail() {
  const { id } = useParams()
  const { data, isPending, error } = useFetch('http://localhost:8000/blog/' + id)
  const history = useNavigate();
  const handleClick = () => {
    fetch('../json/db.json/' + data.id, {
      method: "DELETE"
    }).then(() => {
      history('/');
    })
  }
  return (
    <div className='content'>
      <div className="blog-details">
        {isPending && <div>Loading Details...</div>}
        {error && <div>{error}</div>}
        {data && <article>
          <h2>{data.title}</h2>
          <div>{data.author}</div>
          <div>{data.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>}
      </div>
    </div>
  )
}

export default BlogDetail;