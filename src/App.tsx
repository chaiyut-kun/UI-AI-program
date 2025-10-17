import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import TeamCard from './components/TeamCard.tsx'
import type { RequestBody, ResponseBody, UserDataContextType } from './types/apiTypes.ts'
import { predict } from './lib/apiService.ts'
import Referee from './components/RefeRee.tsx'
import { UserDataCtx } from './contexts/Context.tsx'


function App() {

  const [data, setData] = useState({
    home: "",
    away: "",
    ref_name: "",
    attendance: 0
  } as RequestBody)

  const CtxValue = {
    data,
    setData,
    updateHome: (team: string) => setData(prev => ({ ...prev, home: team })),
    updateAway: (team: string) => setData(prev => ({ ...prev, away: team })),
    updateRef: (ref: string) => setData(prev => ({ ...prev, ref_name: ref }))
  } as UserDataContextType;

  const [response, setResponse] = useState<ResponseBody | null>(null);

  const handleSubmit = async () => {
    console.log(data)
    const result = await predict(data.home, data.away, data.ref_name);
    setResponse(result ?? null);
  }  


  return (
    <UserDataCtx.Provider value={CtxValue}>

      <Header />

      <div className='py-12 px-50 flex justify-between items-center border border-red-200 '>
        <TeamCard isHome={true} />


        {/* Probabilities */}
        <div className='flex flex-col items-center'>

          <div className='flex flex-row gap-12 '>
            {
              response && (
                <>
                  <div className='w-24 text-center text-4xl text-green-600'>Win
                    <div className='text-[25px]/10 text-green-400'>
                      {Math.round(response.winRate)} %
                    </div>
                  </div>
                  <div className='w-24 text-center text-4xl text-red-600' >Lose
                    <div className='text-[25px]/10 text-red-500'>
                      {Math.round(response.loseRate)} %
                    </div>
                  </div>

                </>
              )
            }
          </div>

          {/* Attendance input */}


          <Referee />

          <div className='mt-8 flex justify-center'>
            <button onClick={handleSubmit} className="!bg-purple-800 text-amber-50 p-2 rounded-lg hover:bg-purple-600 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
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
