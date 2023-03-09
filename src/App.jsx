import './App.css'
import Navbar from './components/Navbar'
import InputBox from './components/InputBox'
import Buttons from './components/Buttons'
import OutputBox from './components/OutputBox'

function App() {

  return (
    <div className='max-w-7xl m-[auto] space-y-20'>
      <Navbar/>
      <InputBox/>
      <Buttons/>
      <OutputBox/>
    </div>
  )
}

export default App
