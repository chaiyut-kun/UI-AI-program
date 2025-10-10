import axios from "axios"
import type { ResponseBody } from "../types/apiTypes"

const url = "http://localhost:8000"

export const predict = async () => {
    const response = await axios.post(`${url}/predict`)
    if (response.status === 200) {
        console.log(response.data as ResponseBody)
        return response.data
    }
}

