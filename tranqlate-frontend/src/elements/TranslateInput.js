import {Card, CardBody, CardHeader, Input} from "@chakra-ui/react";
import {LanguageTabs} from "./LanguageTabs";

export function TranslateInput() {
    return (<>
        <Card>
            <CardHeader>
                <LanguageTabs/>
            </CardHeader>
            <CardBody>
                <Input border={"white"}>

                </Input>
            </CardBody>
        </Card>
    </>)
}