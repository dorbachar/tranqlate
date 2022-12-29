import {Tab, TabList, Tabs} from "@chakra-ui/react";
import {useContext} from "react";
import {TranqlateContext} from "../TranqlateContextProvider";

export function LanguageTabs() {
    const {LANGUAGES} = useContext(TranqlateContext);

    return (
        <>
            <Tabs colorScheme="teal">
                <TabList>
                    {
                        Object.values(LANGUAGES).map((lang) => <Tab>{lang}</Tab>)
                    }
                </TabList>
            </Tabs>
        </>
    )
}