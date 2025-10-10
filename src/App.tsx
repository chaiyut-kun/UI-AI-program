import { useState, useContext, createContext } from 'react'
import './App.css'

const UserDataCtx = createContext({})

function App() {

  const [data, setData] = useState({
    home: "",
    away: "",
    attendance: 0,
  } as RequestBody)

  return (
    <UserDataCtx.Provider value={data}>
      
      <button className="bg-blue-500 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
        Save Changes
      </button>
    </UserDataCtx.Provider>
  )
}

export default App
