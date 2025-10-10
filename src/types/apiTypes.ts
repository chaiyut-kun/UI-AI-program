export  interface RequestBody {
    home: string
    away: string
    attendance: number
}

export interface ResponseBody {
    winRate: number
    drawRate: number
    loseRate: number
}
