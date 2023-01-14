import {Card} from '@chakra-ui/react'
import TranslateInput from "../components/TranslateInput";
import {TranslateOutput} from "../components/TranslateOutput";
import SwitchLangButton from "../components/SwitchLangButton";

export function Translate() {
    return (
        <>
            <Card direction={{base: 'column', sm: 'row'}} justify={"center"} boxShadow="white" paddingTop="20px">
                <TranslateInput/>
                <SwitchLangButton/>
                <TranslateOutput/>
            </Card>
        </>)
}