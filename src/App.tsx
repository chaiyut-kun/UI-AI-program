import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='transition-transform duration-500 delay-20 ease-in-out hover:text-2xl'>Hello</div>
      <button className="bg-blue-500 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
        Save Changes
      </button>
    </>
  )
}

export default App
