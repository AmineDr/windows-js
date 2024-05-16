import { MantineProvider } from "@mantine/core";
import WindowComponent from "./components/window";
import Taskbar from "./components/taskbar";
import { useEffect, useState } from "react";
import WmContext from "./contexts/wmContext";
import RefreshContext from "./contexts/refreshContext";

const constWindows: WindowType[] = [
    {
        id: 1,
        x: 100,
        y: 10,
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
        <MantineProvider>
            <RefreshContext.Provider value={{ refresh, setRefresh }}>
                <WmContext.Provider value={{ windows, setWindows }}>
                    {windows.map((w) => (
                        <WindowComponent window={w} key={w.id} />
                    ))}
                    <Taskbar />
                </WmContext.Provider>
            </RefreshContext.Provider>
        </MantineProvider>
    );
}

export default App;
