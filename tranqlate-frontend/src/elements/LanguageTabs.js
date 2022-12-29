import {Tab, TabList, Tabs} from "@chakra-ui/react";
import {useContext} from "react";
import {TranqlateContext} from "../TranqlateContextProvider";

export function LanguageTabs({tabIndex, setTabIndex}) {
    const {LANGUAGES} = useContext(TranqlateContext);

    return (
        <>
            <Tabs index={tabIndex} onChange={setTabIndex} colorScheme="teal">
                <TabList>
                    {
                        Object.values(LANGUAGES).map((lang) => <Tab>{lang}</Tab>)
                    }
                </TabList>
            </Tabs>
        </>
    )
}