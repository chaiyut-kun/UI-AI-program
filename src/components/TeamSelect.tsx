import { useEffect, useState } from "react"
import { getTeam } from "../lib/apiService";

function TeamSelect({selectedTeam, handleChange}: {selectedTeam: string, handleChange: React.ChangeEventHandler<HTMLSelectElement>}) {

    // เอาไว้เก็บทีมทั้งหมดทุกทีมที่ดึงมาจาก API
    const [teams, setTeams] = useState([])

    const fetchTeams = async () => {
        setTeams(await getTeam())
    }

    useEffect(() => {
        fetchTeams()
    }, [])

    return (
        <div className="mt-4 flex flex-col items-center">
            <div className="w-full">
                <select className="w-full border rounded p-1 text-center" value={selectedTeam} onChange={handleChange}>
                    {/* ดึง API มาแสดงในชื่อทีม*/}
                    {teams && teams.map((team, index) => {

                        return (
                                <option value={team} key={index}>{team}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default TeamSelect