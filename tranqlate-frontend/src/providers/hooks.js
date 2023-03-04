import {useState} from "react";

export const useTranslation = (serverResponse) => {
    const [translationsHistory, setTranslationsHistory] = useState([]);

    setTranslationsHistory(prevTranslations => [
        ...prevTranslations,
        serverResponse // todo if translation exists, update counter instead (+ need to add counter field)
    ])
    console.log(translationsHistory)
    localStorage.setItem("translations", JSON.stringify(translationsHistory))  // todo if I use translationsHistory here after I set it, it still holds the old value. Only on next translate, it will update with the previous one I did. Why?

}