import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import {useContext, useState} from "react";
import {StorageContext} from "../providers/StorageContextProvider";
import SimpleQuizQuestion from "./SimpleQuizQuestion";
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from "react-icons/io";

const noQuizAlert = (toast) => {
    return () =>
        toast({
            title: 'Can\'t launch quiz.',
            description: "We need at least 5 translations in your history in order to create a quiz. See you soon!",
            status: 'error',
            duration: 5000,
            isClosable: false,
        });
}

export function generateRandom(amountOfPossibleValues, targetArray) {
    let randIndex
    do {
        randIndex = Math.floor(Math.random() * amountOfPossibleValues);
    } while (targetArray.includes(randIndex))

    return randIndex;
}

const SimpleQuiz = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {
        translationsHistory
    } = useContext(StorageContext)
    const toast = useToast()
    const [numQuestion, setNumQuestion] = useState(0);

    const numWords = translationsHistory.length;
    const enoughWords = numWords >= 5

    const quizWords = []
    const randIndices = []
    for (let i = 0; i < 5; i++) {
        if (!enoughWords) {
            break;
        }
        const randIndex = generateRandom(numWords, randIndices);
        quizWords.push({
            word: translationsHistory[randIndex],
            index: i + 1
        })
        randIndices.push(randIndex)
    }

    const allQuestions = quizWords.map(word => {
        return <SimpleQuizQuestion translation={word}/>
    })

    return (
        <>
            {
                enoughWords ?
                    <Button onClick={onOpen} colorScheme="teal">Start</Button> :
                    <Button onClick={noQuizAlert(toast)} colorScheme="teal">Start</Button>
            }
            <Modal onClose={() => {
                setNumQuestion(0);
                onClose()
            }} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Translation Challenge</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        {
                            allQuestions[numQuestion]
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button disabled={numQuestion === 0} colorScheme="teal" variant="ghost"
                                onClick={() => setNumQuestion(numQuestion - 1)}>
                            <IoMdArrowDropleftCircle/>
                        </Button>
                        <Button disabled={numQuestion === 4} colorScheme="teal" variant="ghost"
                                onClick={() => setNumQuestion(numQuestion + 1)}>
                            <IoMdArrowDroprightCircle/>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SimpleQuiz