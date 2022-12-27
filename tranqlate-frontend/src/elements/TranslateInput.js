import {Card, CardBody, CardHeader, Input} from "@chakra-ui/react";
import {LanguageTabs} from "./LanguageTabs";
import {getAPI} from "../services/api";
import {getValue} from "@testing-library/user-event/dist/utils";
import {useState} from "react";

export function TranslateInput() {
    const [input, setInput] = useState("");

    function callApiOnEnter(input) {
        return (e) => {
            if (e.key === "Enter") {
                getAPI(input).then(r => {
                });
            }
        };
    }

    return (<>
        <Card>
            <CardHeader>
                <LanguageTabs/>
            </CardHeader>
            <CardBody>
                <Input value={input}
                       border={"white"}
                       onKeyUp={callApiOnEnter(input)}
                       onChange={(e) => setInput(e.target.value)}>

                </Input>
            </CardBody>
        </Card>
    </>)
}