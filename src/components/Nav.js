import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className='navbar'>
            <h1>Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    )
}
export default Nav;