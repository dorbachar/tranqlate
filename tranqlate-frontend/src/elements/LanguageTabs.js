import {Tab, TabList, Tabs} from "@chakra-ui/react";

export function LanguageTabs() {
    return (
        <>
            <Tabs colorScheme="teal">
                <TabList>
                    <Tab>Hebrew</Tab>
                    <Tab>English</Tab>
                    <Tab>Spanish</Tab>
                </TabList>
            </Tabs>
        </>
    )
}