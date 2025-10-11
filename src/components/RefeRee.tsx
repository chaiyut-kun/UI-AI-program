import { useEffect, useState } from "react"
import { getref } from "../lib/apiService";

function RefeRee({ selectedRef, handleChange }: { selectedRef: string, handleChange: React.ChangeEventHandler<HTMLSelectElement> }) {

    const [refs, setRefs] = useState<string[]>([])

    const fetchRefs = async () => {
        const data = await getref()
        setRefs(data)
    }

    useEffect(() => {
        fetchRefs()
    }, [])

    return (
        <div className="mt-4 flex flex-col items-center">
            <div className="w-full">
                <select
                    className="w-full border-2 border-purple-500 rounded-lg p-3 text-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={selectedRef}
                    onChange={handleChange}
                >
                    <option value="">เลือกกรรมการ</option>
                    {refs.map((ref, index) => {

                        return (
                        <option value={index} key={index}>{ref}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default RefeRee
