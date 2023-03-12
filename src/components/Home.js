import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blog')
    return (
        <div className='content'>
            {error && <div>{error}</div>}
            <h3>{isPending}</h3>
            {isPending && <div>Loading...</div>}
            {blog && < BlogList blog={blog} title="All Blogs!" />}
        </div>
    )
}

export default Home;