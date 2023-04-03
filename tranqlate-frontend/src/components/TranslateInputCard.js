import {Card, CardBody, CardHeader, Input, useToast} from "@chakra-ui/react";
import {LanguageTabs} from "./LanguageTabs";
import {useContext, useRef} from "react";
import {TranqlateContext} from "../providers/TranqlateContextProvider";
import {translateText} from "../services/api";
import {get} from "lodash/fp"
import {StorageContext} from "../providers/StorageContextProvider";

const TranslateInputCard = () => {
    const {
        inputText,
        setInputText,
        setOutputText,
        outputLanguageIndex,
        inputLanguageIndex,
        setInputLanguageIndex,
        LANGUAGE_API
    } = useContext(TranqlateContext)

    const {
        onTranslationComplete
    } = useContext(StorageContext)

    const toast = useToast()

    const inputRef = useRef(null)

    function callApiOnEnter(input, sourceLanguage, targetLanguage) {
        return async (e) => {
            if (e.key === "Enter") {
                inputRef.current.blur();
                let res;
                try {
                    res = await translateText(input, sourceLanguage, targetLanguage)
                } catch (e) {
                    toast({
                        title: 'Server Offline!',
                        description: "No response from tranQlate server. It seems like the server is down.",
                        status: 'error',
                        duration: 5000,
                        isClosable: false,
                    })
                }

                const translation = get("translation", res);
                setOutputText(translation)
                onTranslationComplete(res)
            } else if (e.key === "Backspace") {
                setTimeout(() => setOutputText(""), 200);
            }
        };
    }

    return <>
        <Card>
            <CardHeader>
                <LanguageTabs tabIndex={inputLanguageIndex} setTabIndex={setInputLanguageIndex}/>
            </CardHeader>
            <CardBody>
                <Input value={inputText}
                       border={"white"}
                       onKeyUp={callApiOnEnter(inputText, LANGUAGE_API[inputLanguageIndex], LANGUAGE_API[outputLanguageIndex])}
                       onChange={e => setInputText(e.target.value)}
                       variant="unstyled"
                       ref={inputRef}
                       placeholder="Translate..."
                       onFocus={(e) => e.target.placeholder = ""}
                       onBlur={(e) => e.target.placeholder = "Translate..."}>
                </Input>
            </CardBody>
        </Card>
    </>
}

export default TranslateInputCard