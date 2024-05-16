import { useContext } from "react";
import WmContext from "../contexts/wmContext";
import RefreshContext from "../contexts/refreshContext";

const useWindows = () => {
    const { windows, setWindows } = useContext(WmContext);
    const { setRefresh } = useContext(RefreshContext);

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

    const addWindow = () => {
        const newWindow: WindowType = {
            id: genMaxId() + 1,
            x: Math.random() * 20,
            y: Math.random() * 20,
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

    const genMaxId = () => {
        return Math.max(...windows.map((w) => w.id));
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
