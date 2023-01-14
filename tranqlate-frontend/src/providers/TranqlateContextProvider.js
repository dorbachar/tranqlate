import {createContext, useState} from "react";


export const TranqlateContext = createContext({});

const TranqlateContextProvider = ({children}) => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [inputLanguageIndex, setInputLanguageIndex] = useState(0);
    const [outputLanguageIndex, setOutputLanguageIndex] = useState(1);

    const LANGUAGE_INDEX_TO_DISPLAY_NAME = {0: "Hebrew", 1: "English", 2: "Spanish"};
    const LANGUAGE_INDEX_TO_API_NAME = {0: "he", 1: "en", 2: "es"};

    const onUpdateLanguage = (value, type) => {
        if (type === "input") {
            if (value === outputLanguageIndex) {
                setInputLanguageIndex(value);
                setOutputLanguageIndex(inputLanguageIndex);
            } else {
                setInputLanguageIndex(value);
            }
        } else {
            if (value === inputLanguageIndex) {
                setOutputLanguageIndex(value);
                setInputLanguageIndex(outputLanguageIndex);
            } else {
                setOutputLanguageIndex(value);
            }
        }
        clearText();
    }

    const clearText = () => {
        setInputText("");
        setOutputText("");
    }

    const onSwitchLanguage = () => {
        setOutputLanguageIndex(inputLanguageIndex);
        setInputLanguageIndex(outputLanguageIndex);
        clearText();
    }

    const ctx = {
        inputText,
        setInputText,

        outputText,
        setOutputText,

        inputLanguageIndex,
        setInputLanguageIndex: ((newInput) => onUpdateLanguage(newInput, "input")),

        outputLanguageIndex,
        setOutputLanguageIndex: ((newInput) => onUpdateLanguage(newInput, "output")),

        LANGUAGES: LANGUAGE_INDEX_TO_DISPLAY_NAME,
        LANGUAGE_API: LANGUAGE_INDEX_TO_API_NAME,
        onSwitchLanguage
    };

    return <TranqlateContext.Provider value={ctx}>
        {children}
    </TranqlateContext.Provider>
}

export default TranqlateContextProvider;