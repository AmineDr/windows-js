import { Card, CardSection, CloseIcon, Flex, Text, Title } from "@mantine/core";
import classes from "./styles/windows.module.css";
import useWindows from "../hooks/useWindows";
import Draggable from "react-draggable";

const Window = ({ window }: { window: WindowType }) => {
    const { destroyWindow, focusWindow } = useWindows();
    const bgElement = document.getElementsByClassName('bg')[0]

    console.log()
    return (
        <Draggable
            axis="both"
            handle=".handle"
            defaultClassName={classes.window}
            grid={[1, 1]}
            scale={1}
            bounds={{top: 0, left: 0, right: bgElement?.clientWidth-window.w, bottom: bgElement?.clientHeight-window.h-40}}
            defaultPosition={{ x: window.x, y: window.y }}
        >
            <Card
                withBorder
                p={"xl"}
                style={{ top: window.y, left: window.y, zIndex: window.z }}
                w={window.w}
                h={window.h}
                onMouseDownCapture={() => {
                    focusWindow(window.id)
                }}
            >
                <CardSection
                    withBorder
                    display={"flex"}
                    className="handle"
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Flex>
                        <Title size={24} style={{ userSelect: "none" }}>
                            Window title
                        </Title>
                    </Flex>
                    <Flex>
                        <CloseIcon size={"12"} cursor={"pointer"} onClick={() => destroyWindow(window.id)} />
                    </Flex>
                </CardSection>
                <CardSection py={"lg"} className={classes.content}>
                    <Text>
                        Some random text Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Commodi reiciendis dolorum
                        voluptatibus ratione nemo repellendus ad temporibus
                        pariatur molestiae veritatis autem sapiente doloremque
                        possimus atque maiores, deserunt, illum perspiciatis
                        odio laborum enim ea quis cumque ipsam officiis. Iure
                        vel, aliquam harum pariatur repellat eius hic, quae
                        doloribus saepe quo quasi maxime delectus nesciunt
                        aperiam unde nulla. Officia nisi vitae sint earum illum
                        quibusdam fugiat commodi nobis culpa maiores hic
                        quaerat, perferendis minima? Quis est deleniti vitae ut
                        odit eaque molestias voluptatem recusandae at ab
                        cupiditate obcaecati, non nulla sit suscipit ullam.
                        Delectus voluptate voluptates iste laudantium officiis
                        ab vitae sint.
                    </Text>
                </CardSection>
            </Card>
        </Draggable>
    );
};

export default Window;
