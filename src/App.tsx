import { MantineProvider } from "@mantine/core";
import WindowComponent from "./components/window";
import Taskbar from "./components/taskbar";
import { useEffect, useState } from "react";
import WmContext from "./contexts/wmContext";
import RefreshContext from "./contexts/refreshContext";
import "./style.css"


const constWindows: WindowType[] = [
    {
        id: 1,
        x: 0,
        y: 0,
        h: 250,
        w: 250,
        z: 101,
    },
];

function App() {
    const [windows, setWindows] = useState<WindowType[]>(constWindows);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if (refresh) setRefresh(false);
    }, [refresh]);

    return (
        <MantineProvider defaultColorScheme="dark">
            <RefreshContext.Provider value={{ refresh, setRefresh }}>
                <WmContext.Provider value={{ windows, setWindows }}>
                    <div className="bg">
                    {windows.map((w) => (
                        <WindowComponent window={w} key={w.id} />
                    ))}
                    <Taskbar />
                    </div>
                </WmContext.Provider>
            </RefreshContext.Provider>
        </MantineProvider>
    );
}

export default App;
