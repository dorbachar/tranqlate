import {Card, CardBody, CardHeader, Input} from "@chakra-ui/react";
import {LanguageTabs} from "./LanguageTabs";
import {useContext} from "react";
import {TranqlateContext} from "../TranqlateContextProvider";

export function TranslateInput() {
    const {inputText, setInputText, setOutputText} = useContext(TranqlateContext);

    function callApiOnEnter(input) {
        return (e) => {
            if (e.key === "Enter") {
                // getAPI(input).then(() => {
                // });

                // todo temp code below just prints input on enter
                setOutputText(inputText);
            }
        };
    }

    return (<>
        <Card>
            <CardHeader>
                <LanguageTabs/>
            </CardHeader>
            <CardBody>
                <Input value={inputText}
                       border={"white"}
                       onKeyUp={callApiOnEnter(inputText)}
                       onChange={(e) => setInputText(e.target.value)}>
                </Input>
            </CardBody>
        </Card>
    </>)
}