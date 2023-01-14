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
import {useNavigate} from "react-router-dom";

export function AppMenu() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
        onClose();
    }

    return (
        <>
            <Button ref={btnRef} onClick={onOpen} borderRadius="100px" variant="ghost">
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
                                variant={"ghost"}
                                onClick={() => handleClick("/translate")}>
                            Translate
                        </Button>
                        <Button leftIcon={<BiBrain/>}
                                variant={"ghost"}
                                onClick={() => handleClick("/quiz")}>
                            Quiz
                        </Button>
                        <Button leftIcon={<BsClockHistory/>}
                                variant={"ghost"}
                                onClick={() => handleClick("/history")}>
                            History
                        </Button>
                    </DrawerBody>

                    <DrawerFooter justifyContent={"center"}>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}