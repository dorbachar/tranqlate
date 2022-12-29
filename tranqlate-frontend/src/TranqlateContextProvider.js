import {createContext, useState} from "react";


export const TranqlateContext = createContext({});

const TranqlateContextProvider = ({children}) => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [inputLanguageIndex, setInputLanguageIndex] = useState(0);
    const [outputLanguageIndex, setOutputLanguageIndex] = useState(1);

    const LANGUAGES = {0: "Hebrew", 1: "English", 2: "Spanish"};

    const onUpdateLanguage = (value, type) => {
        if (type === "input") {
            if (value !== outputLanguageIndex) {
                setInputLanguageIndex(value);
            } else {
                setOutputLanguageIndex(inputLanguageIndex);
                setInputLanguageIndex(value);
            }
        } else {
            if (value !== inputLanguageIndex) {
                setOutputLanguageIndex(value);
            } else {
                setInputLanguageIndex(outputLanguageIndex);
                setOutputLanguageIndex(value);
            }
        }
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

        LANGUAGES
    };

    return <TranqlateContext.Provider value={ctx}>
        {children}
    </TranqlateContext.Provider>
}

export default TranqlateContextProvider;