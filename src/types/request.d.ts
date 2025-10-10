interface RequestBody {
    home: string
    away: string
    attendance: number
}

interface ResponseBody {
    winRate: number
    drawRate: number
    loseRate: number
}