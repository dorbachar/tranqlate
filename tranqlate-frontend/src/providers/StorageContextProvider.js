import {createContext, useState} from "react";

export const StorageContext = createContext({});

const StorageContextProvider = ({children}) => {
    const [translationsHistory, setTranslationsHistory] = useState([]);

    const onTranslationComplete = (serverResponse) => {
        setTranslationsHistory(prevTranslations => [
            ...prevTranslations,
            serverResponse // todo if translation exists, update counter instead (+ need to add counter field)
        ])
        localStorage.setItem("translations", JSON.stringify(translationsHistory))  // todo if I use translationsHistory here after I set it, it still holds the old value. Only on next translate, it will update with the previous one I did. Why?
    }

    const ctx = {
        onTranslationComplete,
        translationsHistory
    }

    return <StorageContext.Provider value={ctx}>
        {children}
    </StorageContext.Provider>
}

export default StorageContextProvider;