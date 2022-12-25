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

export function AppMenu() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

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
                        <Button leftIcon={<RiTranslate/>} colorScheme='teal' variant={"ghost"}>
                            Translate
                        </Button>
                        <Button leftIcon={<BiBrain/>} colorScheme='teal' variant={"ghost"}>
                            Quiz
                        </Button>
                        <Button leftIcon={<BsClockHistory/>} colorScheme='teal' variant={"ghost"}>
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