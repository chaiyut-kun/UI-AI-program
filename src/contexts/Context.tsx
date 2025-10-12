import { createContext } from "react"
import type { UserDataContextType } from "../types/apiTypes"

export const UserDataCtx = createContext<UserDataContextType | null>(null)

