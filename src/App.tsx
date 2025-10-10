import { useState, useEffect, createContext } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import TeamCard from './components/TeamCard.tsx'
import type { RequestBody, ResponseBody } from './types/apiTypes.ts'
import { predict } from './lib/apiService.ts'

const UserDataCtx = createContext({})

function App() {

  const [data, setData] = useState({
    home: "",
    away: "",
    attendance: 0,
  } as RequestBody)

  const [response, setResponse] = useState<ResponseBody | null>(null);

  const fetchResult = async () => {
    const result = await predict();
    setResponse(result);
    console.log(result);
  }

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <UserDataCtx.Provider value={data}>

      <Header />
      {/* <button className="bg-blue-500 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
        Save Changes
      </button> */}
      <div className='py-12 px-50 flex justify-between items-center border border-red-200 '>
        <TeamCard team='man_utd' />
        <div className='flex flex-col gap-12 '>
          {
            response?.winRate && (
              <>
                <div className='w-24 text-center'>Win rate: {response.winRate}</div>
                <div className='w-24 text-center'>Draw rate: {response.drawRate}</div>
                <div className='w-24 text-center'>Lost rate: {response.loseRate}</div>
              </>
            )
          }
        </div>
        <TeamCard team='man_city' />
      </div>
    </UserDataCtx.Provider>
  )
}

export default App
