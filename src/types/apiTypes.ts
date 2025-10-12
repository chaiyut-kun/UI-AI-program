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

export interface UserDataContextType {
    data: RequestBody; // Replace 'any' with the actual type of 'data'
    updateHome: (team: string) => void;
    updateAway: (team: string) => void;
    updateRef: (ref: string) => void;
}