import {Button, Card, Container} from '@chakra-ui/react'
import {TranslateInput} from "../elements/TranslateInput";
import {TranslateOutput} from "../elements/TranslateOutput";
import styles from "../styles/general.module.scss"
import {CgArrowsExchange} from "react-icons/cg";

export function Translate() {
    return (
        <>
            <Card direction={{base: 'column', sm: 'row'}} justify={"center"} boxShadow="white" paddingTop="20px">
                <TranslateInput/>
                <Button colorScheme='teal' borderRadius={"100px"} variant={"ghost"} className={styles["rotate-button"]}>
                    <CgArrowsExchange/>
                </Button>
                <TranslateOutput/>
            </Card>
        </>)
}