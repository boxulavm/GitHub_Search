import React from 'react'

const Navbar = props => {
    return (
        <nav className="navbar">
            <i className="fab fa-github fa-2x text-info navbar-brand"> <small className='text-white'>{props.title}</small></i>
        </nav>
    )
}

export default Navbar
