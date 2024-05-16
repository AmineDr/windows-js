import { Button } from "@mantine/core";
import useWindows from "../hooks/useWindows";
import classes from "./styles/taskbar.module.css";
import { IconDotsVertical, IconPlus } from "@tabler/icons-react";

const Taskbar = () => {
    const { windows, focusWindow, addWindow } = useWindows();
    return (
        <div className={classes.taskbar}>
            <div className={classes.taskbarIcons}>
                <Button>Taskbar</Button>
                <Button size="sm" onClick={addWindow}>
                    <IconPlus />
                </Button>
                <IconDotsVertical />
                {windows.map((w) => (
                    <Button
                        size="sm"
                        key={w.id}
                        onClick={() => focusWindow(w.id)}
                    >
                        Window {w.id}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Taskbar;
