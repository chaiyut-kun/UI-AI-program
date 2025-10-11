import { useEffect, useState, useContext } from "react"
import { getref } from "../lib/apiService";
import { UserDataCtx } from "../contexts/Context";

function Referee() {

    const userDataContext = useContext(UserDataCtx)

    if (!userDataContext) {
        throw new Error("UserDataCtx must be used within a Provider");
    }

    const { updateRef } = userDataContext

    const [refs, setRefs] = useState<string[]>([])

    const fetchRefs = async () => {
        const data = await getref()
        setRefs(Object.values(data))
    }

    // selected ref
    const [selectedRef, setSelectedRef] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRef(e.target.value)
        setRefData()

    }

    const setRefData = () => {
        updateRef(selectedRef)
    }

    useEffect(() => {
        fetchRefs()
    }, [])

    useEffect(() => {
        setRefData()
    }, [selectedRef])

    return (
        <div className="mt-4 flex flex-col items-center">
            <div className="w-full">
                <select
                    className="w-full border-2 border-purple-500 rounded-lg p-3 text-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-600
                                transition delay-150 duration-300 ease-in-out  hover:translate-y-1 hover:scale-100"
                    value={selectedRef}
                    onChange={handleChange}
                >
                    <option value="">เลือกกรรมการ</option>
                    {refs.map((ref, index) => {

                        return (
                            <option
                                value={ref} key={index}
                            >
                                <p className="transition delay-150 duration-300 ease-in-out  hover:translate-y-1 hover:text-xl">
                                    {ref}
                                </p>
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Referee
