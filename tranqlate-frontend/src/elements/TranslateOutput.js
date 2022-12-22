import {Card, CardBody, CardHeader, Text} from "@chakra-ui/react";
import {LanguageTabs} from "./LanguageTabs";

export function TranslateOutput() {
    return (<>
        <Card>
            <CardHeader>
                <LanguageTabs/>
            </CardHeader>
            <CardBody>
                <Text>

                </Text>
            </CardBody>
        </Card>
    </>)
}