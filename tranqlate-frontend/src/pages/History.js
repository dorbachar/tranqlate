import {StorageContext} from "../providers/StorageContextProvider";
import {useContext} from "react";

export function History() {
    const {
        translationsHistory
    } = useContext(StorageContext)

    return translationsHistory.map((value) => {
        return <p>{JSON.stringify(value)}</p>;
    })
}