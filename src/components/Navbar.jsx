import React, { useState } from 'react'
import About from "./About"

const Navbar = (props) => {
    return (
        <nav className='h-16 px-20 bg-blue-100 text-blue-900 font-bold flex flex-row justify-between items-center rounded-b-lg shadow transition' style={props.emoji === "🌙" ? props.lightMode : props.darkMode}>
            <h1>{props.title}</h1>
            <div className="flex space-x-6 font-bold cursor-pointer">
                <a href="/">About</a>
                <a href="/">All Projects</a>
                <a href="/">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar