import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>
            <nav className='h-16 px-20 bg-blue-100 text-blue-900 font-bold flex flex-row justify-between items-center rounded-b-lg drop-shadow transition' style={props.emoji === "🌙" ? props.lightMode : props.darkMode}>
                <h1><Link to="/">{props.title}</Link></h1>
                <div className="flex space-x-6 font-bold cursor-pointer">
                    <Link to="/about">About</Link>
                    <Link to="/projects">All Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar