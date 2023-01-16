import {Card, CardBody, CardHeader, Text} from "@chakra-ui/react";
import {LanguageTabs} from "./LanguageTabs";
import {useContext} from "react";
import {TranqlateContext} from "../providers/TranqlateContextProvider";

export function TranslateOutputCard() {
    const {outputText, outputLanguageIndex, setOutputLanguageIndex} = useContext(TranqlateContext);

    return (<>
        <Card>
            <CardHeader>
                <LanguageTabs tabIndex={outputLanguageIndex} setTabIndex={setOutputLanguageIndex}/>
            </CardHeader>
            <CardBody>
                <Text>
                    {outputText}
                </Text>
            </CardBody>
        </Card>
    </>)
}