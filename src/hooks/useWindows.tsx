import { useContext } from "react";
import WmContext from "../contexts/wmContext";
import RefreshContext from "../contexts/refreshContext";

const useWindows = () => {
    const { windows, setWindows } = useContext(WmContext);
    const { setRefresh } = useContext(RefreshContext);
    const bgElement = document.getElementsByClassName('bg')[0]

    const moveWindow = ({
        w_id,
        x,
        y,
    }: {
        w_id: number;
        x: number;
        y: number;
    }) => {
        const window = windows.find((w) => w.id === w_id);
        if (!window) return;
        window.x = x;
        window.y = y;
        setWindows(() => {
            const filtered = windows.filter((w) => w.id !== w_id);
            filtered.push(window);
            return filtered;
        });
    };

    const getRandomPosition = () => {
        if (!bgElement) return [0, 0]
        return [bgElement.clientWidth-250, bgElement.clientHeight-250]
    }

    const addWindow = () => {
        const [x, y] = getRandomPosition()
        const newWindow: WindowType = {
            id: Math.round(Math.random()*69420),
            x: x,
            y: y,
            h: 250,
            w: 250,
            z: getMaxZ() + 1,
        };
        setWindows((prev) => {
            prev.push(newWindow);
            return prev;
        });
        setRefresh(true);
    };

    const getMaxZ = () => {
        return Math.max(...windows.map((w) => w.z));
    };

    const destroyWindow = (w_id: number) => {
        const filtered = windows.filter((w) => w.id !== w_id);
        setWindows(filtered);
        setRefresh(true);
    };

    const focusWindow = (w_id: number) => {
        const window = windows.find((w) => w.id === w_id);
        if (!window) return null;

        const newZ = getMaxZ();
        const highestWindow = windows.find((w) => w.z === newZ);

        if (window === highestWindow) return;

        if (highestWindow) {
            const tempZ = window.z;
            window.z = highestWindow.z;
            highestWindow.z = tempZ;
        }

        const updatedWindows = windows.map((w) => {
            if (w.id === w_id) return window;
            if (highestWindow && w.id === highestWindow.id)
                return highestWindow;
            return w;
        });

        setWindows(updatedWindows);
    };

    return {
        windows,
        focusWindow,
        addWindow,
        destroyWindow,
        moveWindow,
        setWindows,
    };
};

export default useWindows;
