import {Card} from '@chakra-ui/react'
import TranslateInput from "../elements/TranslateInput";
import {TranslateOutput} from "../elements/TranslateOutput";
import SwitchLangButton from "../elements/SwitchLangButton";

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