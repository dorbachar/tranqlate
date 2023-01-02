import {Button, Flex} from "@chakra-ui/react";
import styles from "../styles/general.module.scss";
import {CgArrowsExchange} from "react-icons/cg";
import {useContext} from "react";
import {TranqlateContext} from "../providers/TranqlateContextProvider";

const SwitchLangButton = () => {
    const {onSwitchLanguage} = useContext(TranqlateContext);

    return <>
        <Flex direction="column" justifyContent="center">
            <Button borderRadius={"100px"} variant={"ghost"}
                    className={styles["rotate-button"]}
                    onClick={onSwitchLanguage}>
                <CgArrowsExchange/>
            </Button>
        </Flex>
    </>
}

export default SwitchLangButton;