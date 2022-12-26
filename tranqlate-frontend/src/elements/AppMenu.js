import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {RiTranslate} from "react-icons/ri";
import {BiBrain} from "react-icons/bi";
import {BsClockHistory} from "react-icons/bs";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Translate} from "../pages/Translate";
import {Quiz} from "../pages/Quiz";
import {NotFound} from "../pages/NotFound";


export function AppMenu() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

    const navigate = useNavigate();

    function handleClick(path, onClose) {
        navigate(path);
        onClose();
    }

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen} borderRadius={"100px"} variant={"ghost"}>
                <HamburgerIcon/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody>
                        <Button leftIcon={<RiTranslate/>}
                                colorScheme='teal'
                                variant={"ghost"}
                                onClick={()=>handleClick("/translate", onClose)}>
                            Translate
                        </Button>
                        <Button leftIcon={<BiBrain/>}
                                colorScheme='teal'
                                variant={"ghost"}
                                onClick={()=>handleClick("/quiz", onClose)}>
                            Quiz
                        </Button>
                        <Button leftIcon={<BsClockHistory/>}
                                colorScheme='teal'
                                variant={"ghost"}
                                onClick={()=>handleClick("/history", onClose)}>
                            History
                        </Button>
                    </DrawerBody>

                    <DrawerFooter justifyContent={"center"}>
                        <Button colorScheme='teal'>Login</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}