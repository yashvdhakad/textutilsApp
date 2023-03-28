import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
    createRoutesFromElements,
    Outlet
  } from "react-router-dom";
  import About from "./About"
  import Contact from "./Contact"

const Navbar = (props) => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} >
                {/* <Route index element={<Home />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Route>)
    )

    return (
        <>
            <RouterProvider router={router} />
            <nav className='h-16 px-20 bg-blue-100 text-blue-900 font-bold flex flex-row justify-between items-center rounded-b-lg drop-shadow transition' style={props.emoji === "🌙" ? props.lightMode : props.darkMode}>
                <h1>{props.title}</h1>
                <div className="flex space-x-6 font-bold cursor-pointer">
                    <a href="/about">About</a>
                    <a href="/projects">All Projects</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </>
    )
}

const Root = () => {
    return (
        <>
            <div>
                {/* <Link to="/">Home</Link> */}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar