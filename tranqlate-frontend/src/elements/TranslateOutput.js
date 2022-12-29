import {Card, CardBody, CardHeader, Text} from "@chakra-ui/react";
import {LanguageTabs} from "./LanguageTabs";
import {useContext} from "react";
import {TranqlateContext} from "../TranqlateContextProvider";

export function TranslateOutput() {
    const {outputText} = useContext(TranqlateContext);

    return (<>
        <Card>
            <CardHeader>
                <LanguageTabs/>
            </CardHeader>
            <CardBody>
                <Text>
                    {outputText}
                </Text>
            </CardBody>
        </Card>
    </>)
}