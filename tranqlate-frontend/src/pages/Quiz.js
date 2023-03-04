import {Text, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Flex} from "@chakra-ui/react";
import {GiKidSlide} from "react-icons/gi";
import SimpleQuiz from "../quizes/SimpleQuiz";

export function Quiz() {
    return <Flex direction="row" justifyContent="center" marginTop="50px">
        <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 2fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'>Translation Challenge 🛝</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Translate words you have searched for in the past.</Text>
                </CardBody>
                <CardFooter>
                    <SimpleQuiz/>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Timed Challenge ⏱</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Translation Challenge with a timer.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme="teal">Start</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Matching Quiz 🧠</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Match a word with its translation.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme="teal">Start</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    </Flex>
}