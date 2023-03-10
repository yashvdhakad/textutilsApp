import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className='max-w-7xl m-[auto] space-y-20'>
      <Navbar title={"📋 TextUtilsApp"}/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
