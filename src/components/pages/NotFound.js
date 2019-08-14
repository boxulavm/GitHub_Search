import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <div className="container mt-5 text-center">
            <h3 className="text-danger">404 Page Not Found!</h3>
            <Link to='/' className='btn btn-info my-5'>Back to Search</Link>
        </div>
    )
}

export default NotFound
