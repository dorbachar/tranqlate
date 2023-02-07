import {createContext, useState} from "react";
import {set} from "lodash/fp";

export const StorageContext = createContext({});

const StorageContextProvider = ({children}) => {
    const [translations, setTranslations] = useState({});

    // todo pass languages and save them too with the translation
    const onTranslationComplete = (input, translation) => {
        const newTranslations = set(input, translation, translations)
        setTranslations(newTranslations)
        console.log(newTranslations)
        localStorage.setItem("translations", JSON.stringify(newTranslations)) // todo if I use translations here after I set it, it still holds the old value. Only on next translate, it will update with the previous one I did. Why?
    }

    const ctx = {
        onTranslationComplete
    }

    return <StorageContext.Provider value={ctx}>
        {children}
    </StorageContext.Provider>
}

export default StorageContextProvider;