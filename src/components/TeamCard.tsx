import { useEffect, useState, useContext } from 'react'
import TeamKeys from '../types/TeamKeys'
import TeamSelect from './TeamSelect'
import { UserDataCtx } from '../contexts/Context'

type TeamKeys = keyof typeof TeamKeys
function TeamCard({ isHome }: { isHome: boolean }) {

    // global context
    const userDataContext = useContext(UserDataCtx);

    if (!userDataContext) {
        throw new Error("UserDataCtx must be used within a Provider");
    }

    const { updateHome, updateAway } = userDataContext;

    // เอาไว้เก็บทีมที่ user เลือก
    const [selectedTeam, setSelectedTeam] = useState<TeamKeys>('Manchester Utd')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTeam(event.target.value as TeamKeys);
        setTeamData()
    };

    const setTeamData = () => {
        if (isHome) {
            updateHome(selectedTeam)
        } else {
            updateAway(selectedTeam)
        }
    }

    // path of image card
    const [path, setPath] = useState(TeamKeys[selectedTeam])


    useEffect(() => {
        setPath(TeamKeys[selectedTeam])
        setTeamData()
    }, [selectedTeam])


    return (
        <div className='w-60'>
            <h2 className='text-center text-2xl mb-2'>Home</h2>
            <div className='bg-gray-300 w-60 h-70 rounded flex items-center justify-center p-2'>
                <img 
                src={path} alt="" 
                className={`w-40 h-40 transition delay-150 duration-300 ease-in-out  hover:translate-y-1 hover:scale-130`} />
            </div>
            <TeamSelect selectedTeam={selectedTeam} handleChange={handleChange} />
        </div>

    )
}

export default TeamCard