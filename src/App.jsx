import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

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
    <div className='max-w-screen-2xl m-[auto] space-y-20 transition relative' style={emoji === "🌙" ? lightMode : darkMode}>
      <Navbar title="📋 TextUtilsApp" emoji={emoji} darkMode={darkMode} lightMode={lightMode} />
      <button className='absolute right-20 text-lg' onClick={modeHandler}>{emoji}</button>
      <Main emoji={emoji} darkMode={darkMode} lightMode={lightMode} />
      <Footer />
    </div>
  )
}

export default App
