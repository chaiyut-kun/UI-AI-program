export  interface RequestBody {
    home: string
    away: string
    ref_name: string
}

export interface ResponseBody {
    winRate: number
    drawRate: number
    loseRate: number
}
