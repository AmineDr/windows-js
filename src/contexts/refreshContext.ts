import { createContext } from "react"

type RefreshContextType = {
    refresh: boolean,
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

const RefreshContext = createContext<RefreshContextType>({refresh: true, setRefresh: () => {}})

export default RefreshContext