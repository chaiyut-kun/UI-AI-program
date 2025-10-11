import {useEffect, useState} from 'react'
import TeamKeys from '../types/TeamKeys'
import TeamSelect from './TeamSelect'

type TeamKeys = keyof typeof TeamKeys
type Props = { team: TeamKeys}
function TeamCard({isHome}:{isHome: boolean}) {

    // เอาไว้เก็บทีมที่ user เลือก
    const [selectedTeam, setSelectedTeam] = useState<TeamKeys>('Manchester Utd')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTeam(event.target.value as TeamKeys);
    };

    // path of image card
    const [path, setPath] = useState('')

    
    useEffect(() => {
        setPath(TeamKeys[selectedTeam])
    }, [selectedTeam])


    return (
        <div className='w-60'>
            <h2 className='text-center text-2xl mb-2'>Home</h2>
            <div className='bg-gray-300 w-60 h-70 rounded flex items-center p-2'>
                <img src={path} alt="" className='w-60 h-60' />
            </div>
            <TeamSelect selectedTeam={selectedTeam} handleChange={handleChange} />
        </div>

    )
}

export default TeamCard