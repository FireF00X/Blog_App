import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="content">
            <h2>Opps...</h2>
            <p>this page is not found !!</p>
            <Link to="/">click here to back again</Link>
        </div>
    )
}

export default NotFound