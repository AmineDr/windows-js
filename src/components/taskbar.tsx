import { Button, Text } from "@mantine/core";
import useWindows from "../hooks/useWindows";
import classes from "./styles/taskbar.module.css";
import { IconPlus } from "@tabler/icons-react";

const Taskbar = () => {
    const { windows, addWindow } = useWindows();
    return (
        <div className={classes.taskbar}>
            <div className={classes.taskbarIcon}>
                <Text>Taskbar</Text>
                <Button size="sm" onClick={addWindow}>
                    <IconPlus />
                </Button>
            </div>
            {windows.map((w) => (
                <div className={classes.taskbarIcon} key={w.id}>
                    Window {w.id}
                </div>
            ))}
        </div>
    );
};

export default Taskbar;
