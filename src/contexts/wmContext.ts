import { createContext } from "react"

type WmContextType = {
    windows: WindowType[],
    setWindows: React.Dispatch<React.SetStateAction<WindowType[]>>
}

const WmContext = createContext<WmContextType>({windows: [], setWindows: () => {}})

export default WmContext