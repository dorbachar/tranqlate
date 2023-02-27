import {StorageContext} from "../providers/StorageContextProvider";
import {useContext} from "react";
import {Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import {get} from "lodash/fp";
import {keys} from "lodash";
import {first} from "lodash/array";

export function History() {
    const {
        translationsHistory
    } = useContext(StorageContext)

    return (<TableContainer>
            <Table variant='simple' colorScheme='blue' size="sm">
                <TableCaption placement="top">Translations History</TableCaption>
                <Thead>
                    <Tr background="#f5fcfc">
                        {
                            keys(first(translationsHistory)).map(key => <Td fontWeight="bold"> {key} </Td>)
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        translationsHistory.map(translation => {
                            return <Tr>
                                {
                                    Object.values(translation).map(value => <Td> {value} </Td>)
                                }
                            </Tr>;
                        })
                    }

                </Tbody>
                {/*<Tfoot>*/}
                {/*    <Tr>*/}
                {/*        <Th>To convert</Th>*/}
                {/*        <Th>into</Th>*/}
                {/*        <Th isNumeric>multiply by</Th>*/}
                {/*    </Tr>*/}
                {/*</Tfoot>*/}
            </Table>
        </TableContainer>
    )
}