import React, { useState } from 'react'
import About from './About'

const Navbar = (props) => {
    const [emoji, setEmoji] = useState("🌙");

    const darkModeHandler =()=>{
        if (emoji === "☀️") {
            setEmoji("🌙")
        }
        else {
            setEmoji("☀️")
        }
    }

    let darkmode = {
        backgroundColor: "#060047",
        color: "white"
    }
    let lightmode = {
        backgroundColor: ""
    }

    return (
        <nav className='h-16 px-20 bg-blue-100 text-blue-900 font-bold flex flex-row justify-between items-center rounded-lg shadow transition' style={emoji === "☀️" ? darkmode : lightmode}>
            <h1>{props.title}</h1>
            <button className="" onClick={darkModeHandler}>{emoji}</button>
            <div className="flex space-x-6 font-bold">
                {/* <a href="/">About</a> */}
                <About/>
                <a href="/">All Projects</a>
                <a href="/">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar