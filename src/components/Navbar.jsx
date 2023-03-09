import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 px-20 bg-blue-100 text-blue-900 font-bold flex flex-row justify-between items-center rounded-lg'>
            <h1>📋 TextUtilsApp</h1>
            <div className="flex space-x-6 font-bold">
                <a href="/">About</a>
                <a href="/">All Projects</a>
                <a href="/">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar