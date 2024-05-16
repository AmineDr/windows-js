import { Card, CardSection, CloseIcon, Flex, Text, Title } from "@mantine/core";
import classes from "./styles/windows.module.css";
import { IconMenu2 } from "@tabler/icons-react";
import useWindows from "../hooks/useWindows";
import Draggable from "react-draggable";

const Window = ({ window }: { window: WindowType }) => {
    const { destroyWindow, focusWindow } = useWindows();

    return (
        <Draggable
            axis="both"
            handle=".handle"
            grid={[1, 1]}
            scale={1}
            defaultPosition={{ x: window.x, y: window.y }}
        >
            <Card
                withBorder
                p={"xl"}
                m={"xl"}
                style={{ top: window.y, left: window.y }}
                w={window.w}
                h={window.h}
                onMouseDown={() => focusWindow(window.id)}
            >
                <CardSection
                    withBorder
                    display={"flex"}
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Flex>
                        <IconMenu2 cursor={"grab"} className="handle" />
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
