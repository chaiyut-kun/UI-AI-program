import axios from "axios"
import type { RequestBody, ResponseBody } from "../types/apiTypes"

const url = "http://localhost:8000"

export const predict = async (home: string, away: string) => {
    const body = {
        home,
        away,
        ref_name: "Michael Oliver"
    } as RequestBody
    const response = await axios.post(`${url}/predict`, body)
    if (response.status === 200) {
        console.log(response.data as ResponseBody)
        return response.data
    }
}

export async function getTeam() {
    const response = await axios.get(`${url}/teams`)
    if (response.status === 200) {
        return response.data
    }
} 
