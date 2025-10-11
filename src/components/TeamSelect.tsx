import { useEffect, useState } from "react"
import { getTeam } from "../lib/apiService";

function TeamSelect() {

    // เอาไว้เก็บทีมทั้งหมดทุกทีมที่ดึงมาจาก API
    const [teams, setTeams] = useState([])

    // เอาไว้เก็บทีมที่ user เลือก
    const [selectedTeam, setSelectedTeam] = useState('Team')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTeam(event.target.value);
    };

    const fetchTeams = async () => {
        setTeams(await getTeam())
    }

    useEffect(() => {
        fetchTeams()
    }, [])

    return (
        <div className="mt-4 flex flex-col items-center">
            <div className="w-full">
                <select className="w-full border rounded p-1 text-center" defaultValue={selectedTeam} value={selectedTeam} onChange={handleChange}>
                    {/* ดึง API มาแสดงในชื่อทีม*/}
                    {teams && teams.map((team, index) => {

                        return (
                            <>
                                <option value={team} key={index}>{team}</option>
                            </>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default TeamSelect