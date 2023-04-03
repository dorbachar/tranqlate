import {Card} from '@chakra-ui/react'
import TranslateInputCard from "../components/TranslateInputCard";
import {TranslateOutputCard} from "../components/TranslateOutputCard";
import SwitchLangButton from "../components/SwitchLangButton";

export function Translate() {
    return (
        <>
            <Card direction={{base: 'column', sm: 'row'}} justify={"center"} boxShadow="white" paddingTop="20px">
                <TranslateInputCard/>
                <SwitchLangButton/>
                <TranslateOutputCard/>
            </Card>
        </>)
}