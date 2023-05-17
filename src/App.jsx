import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [emoji, setEmoji] = useState("🌙");

  const modeHandler = () => {
    emoji === "🌙" ? setEmoji("☀️") : setEmoji("🌙")
  }

  let darkMode = {
    backgroundColor: "black",
    color: "white"
  }
  let lightMode = {
    backgroundColor: "white",
    color: "black"
  }

  return (
    <div className='max-w-screen-2xl m-[auto] space-y-24 transition relative' style={emoji === "🌙" ? lightMode : darkMode}>
      <Router>
        <Navbar title="📋 TextUtilsApp" emoji={emoji} darkMode={darkMode} lightMode={lightMode} />

        <button className='absolute right-20 text-lg' onClick={modeHandler}>{emoji}</button>

        <Routes>
          <Route exact path="/" element={<Main emoji={emoji} darkMode={darkMode} lightMode={lightMode} />} />
          <Route exact path="/about" element={<About emoji={emoji} darkMode={darkMode} lightMode={lightMode} />} />
          <Route exact path="/contact" element={<Contact emoji={emoji} darkMode={darkMode} lightMode={lightMode} />} />

        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
