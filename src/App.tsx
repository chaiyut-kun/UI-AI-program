import { useState, useEffect, createContext } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import TeamCard from './components/TeamCard.tsx'
import type { RequestBody, ResponseBody } from './types/apiTypes.ts'
import { predict } from './lib/apiService.ts'
import TeamSelect from './components/TeamSelect.tsx'
import RefeRee from './components/RefeRee.tsx'

const UserDataCtx = createContext({})

function App() {

  const [data, setData] = useState({
    home: "",
    away: "",
    ref_name: ""
  } as RequestBody)

  const [response, setResponse] = useState<ResponseBody | null>({
    winRate: 100,
    drawRate: 0,
    loseRate: 0,
  });

  const fetchResult = async () => {
    // const result = await predict();
    // setResponse(result);
    // console.log(result);
  }

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <UserDataCtx.Provider value={data}>

      <Header />

      <div className='py-12 px-50 flex justify-between items-center border border-red-200 '>
        <TeamCard isHome={true} />


        {/* Probabilities */}
        <div className='flex flex-col items-center'>

          <div className='flex flex-row gap-12 '>
            {
              response?.winRate && (
                <>
                  <div className='w-24 text-center text-4xl text-green-600'>Win
                    <div className='text-[25px]/10 text-green-400'>
                      {response.winRate}
                    </div>
                  </div>
                  <div className='w-24 text-center text-4xl text-yellow-400'>Draw
                    <div className='text-[25px]/10 text-yellow-300' >
                      {response.drawRate}
                    </div>
                  </div>
                  <div className='w-24 text-center text-4xl text-red-600' >Lose
                    <div className='text-[25px]/10 text-red-500'>
                      {response.loseRate}
                    </div>
                  </div>

                </>
              )
            }
          </div>

          <RefeRee selectedRef={data.ref_name} handleChange={(e) => setData({ ...data, ref_name: e.target.value })} />

          <div className='mt-8 flex justify-center'>
            <button className="!bg-purple-800 text-amber-50 p-2 rounded-lg hover:bg-purple-600 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              predictions
            </button>
          </div>
        </div>
        <TeamCard isHome={false} />



      </div>
    </UserDataCtx.Provider>
  )
}

export default App
