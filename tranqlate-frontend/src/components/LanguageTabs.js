import {Tab, TabList, Tabs} from "@chakra-ui/react";
import {useContext} from "react";
import {TranqlateContext} from "../providers/TranqlateContextProvider";
import uuid from "react-uuid";

export function LanguageTabs({tabIndex, setTabIndex}) {
    const {LANGUAGES} = useContext(TranqlateContext);

    return (
        <>
            <Tabs index={tabIndex} onChange={setTabIndex}>
                <TabList>
                    {
                        Object.values(LANGUAGES).map((lang) => <Tab key={uuid()}>{lang}</Tab>) // todo can simplify, look at history page
                    }
                </TabList>
            </Tabs>
        </>
    )
}