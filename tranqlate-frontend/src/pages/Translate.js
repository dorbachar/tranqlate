import {Button, Card} from '@chakra-ui/react'
import TranslateInput from "../elements/TranslateInput";
import {TranslateOutput} from "../elements/TranslateOutput";
import styles from "../styles/general.module.scss"
import {CgArrowsExchange} from "react-icons/cg";
import {useContext} from "react";
import {TranqlateContext} from "../providers/TranqlateContextProvider";

export function Translate() {
    const {onSwitchLanguage} = useContext(TranqlateContext);

    return (
        <>
            <Card direction={{base: 'column', sm: 'row'}} justify={"center"} boxShadow="white" paddingTop="20px">
                <TranslateInput/>
                <Button borderRadius={"100px"} variant={"ghost"}
                        className={styles["rotate-button"]}
                        onClick={onSwitchLanguage}>
                    <CgArrowsExchange/>
                </Button>
                <TranslateOutput/>
            </Card>
        </>)
}