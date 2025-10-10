import { useState, useContext, createContext } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import TeamCard from './components/TeamCard.tsx'

const UserDataCtx = createContext({})

function App() {

  const [data, setData] = useState({
    home: "",
    away: "",
    attendance: 0,
  } as RequestBody)

  return (
    <UserDataCtx.Provider value={data}>

      <Header />
      {/* <button className="bg-blue-500 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
        Save Changes
      </button> */}
      <div className='py-12 px-50 flex justify-between items-center border border-red-200 '>
        <TeamCard />
        <div className='w-20 h-20 text-center'>Hello</div>
        <TeamCard />
      </div>
    </UserDataCtx.Provider>
  )
}

export default App
