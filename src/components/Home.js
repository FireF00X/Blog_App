import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const { data: blog, isPending, error } = useFetch('../json/db.json')
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