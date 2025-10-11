import React from 'react'
import TeamKeys from '../types/TeamKeys'
import TeamSelect from './TeamSelect'

type TeamKeys = keyof typeof TeamKeys
type Props = {team: TeamKeys}
function TeamCard({team} : Props) {

    const path = TeamKeys[team]
    console.log(path)

    return (
        <div className='w-60'>
            <h2 className='text-center text-2xl mb-2'>Home</h2>
            <div className='bg-gray-300 w-60 h-70 rounded flex items-center p-2'>
                <img src={path} alt="" className='w-60 h-60' />
            </div>
            <TeamSelect/>
        </div>
    
    )
}

export default TeamCard