import {Card, CardBody, CardHeader, Input} from "@chakra-ui/react";
import {LanguageTabs} from "./LanguageTabs";
import {useContext, useRef} from "react";
import {TranqlateContext} from "../providers/TranqlateContextProvider";

const TranslateInput = () => {
    const {
        inputText,
        setInputText,
        setOutputText,
        inputLanguageIndex,
        setInputLanguageIndex
    } = useContext(TranqlateContext);

    function callApiOnEnter(input) {
        return (e) => {
            if (e.key === "Enter") {
                // getAPI(input).then(() => {
                // });

                // todo temp code below just prints input on enter
                setOutputText(inputText);
                inputRef.current.blur();
            }
        };
    }

    const inputRef = useRef(null);

    return (<>
        <Card>
            <CardHeader>
                <LanguageTabs tabIndex={inputLanguageIndex} setTabIndex={setInputLanguageIndex}/>
            </CardHeader>
            <CardBody>
                <Input value={inputText}
                       border={"white"}
                       onKeyUp={callApiOnEnter(inputText)}
                       onChange={(e) => setInputText(e.target.value)}
                       variant="unstyled"
                       ref={inputRef}>
                </Input>
            </CardBody>
        </Card>
    </>)
}

export default TranslateInput;