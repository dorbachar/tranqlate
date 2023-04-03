import {Box, Button, Flex, Input, Text, FormControl, FormLabel, FormHelperText} from "@chakra-ui/react";
import {get} from "lodash/fp";
import {useEffect, useState} from "react";
import {generateRandom} from "./SimpleQuiz";

const WRONG_ANSWER = "wrong";
const CORRECT_ANSWER = "correct";
const NOT_SUBMITTED = "not";

const SimpleQuizQuestion = (translation) => {
    const happyEmojis = [" 🎉", " 💪🏼", " 🍾", " 👏🏾", " 🍻", " 🎊", " 🥳"]
    const sadEmojis = [" 😿", " 🤧", " ☹️", " 🤕"]

    const [userReply, setUserReply] = useState("");
    const [submitStatus, setSubmitStatus] = useState(NOT_SUBMITTED);

    const input = get("translation.word.input", translation);
    const index = get("translation.index", translation);
    const translationResult = get("translation.word.translation", translation);
    const targetLang = get("translation.word.targetLanguage", translation);

    useEffect(() => {
        setUserReply("")
        setSubmitStatus(NOT_SUBMITTED)
    }, [translation])

    const onSubmit = () => {
        if (userReply.toUpperCase() === translationResult.toUpperCase()) {
            setUserReply(userReply + happyEmojis[generateRandom(happyEmojis.length, happyEmojis)])
            setSubmitStatus(CORRECT_ANSWER)
        } else {
            setUserReply(userReply + sadEmojis[generateRandom(sadEmojis.length, sadEmojis)])
            setSubmitStatus(WRONG_ANSWER)
        }
    }

    return <>
        <Flex direction="row" justifyConent="center">
            <Box height="150px" width="500px">
                <FormControl>
                    <Flex direction="column" justifyConent="center">
                        <FormHelperText>{`${index} / 5`}</FormHelperText>
                        <FormLabel>{`Translate ${input} to ${targetLang}`}</FormLabel>
                        <Input
                            value={userReply}
                            textColor={submitStatus !== NOT_SUBMITTED ? "white" : "black"}
                            background={submitStatus !== NOT_SUBMITTED ? (submitStatus === CORRECT_ANSWER ? "green" : "red") : "white"}
                            onChange={e => setUserReply(e.target.value)}></Input>
                        <Text
                            fontStyle="italic"
                            color="red">
                            {
                                submitStatus === WRONG_ANSWER ? `Correct answer is: ${translationResult}` : ''
                            }
                        </Text>
                        <Button disabled={submitStatus !== NOT_SUBMITTED}
                                width="5vw"
                                marginTop="10px"
                                size="xs"
                                type="submit"
                                onClick={onSubmit}
                        >
                            Submit
                        </Button>
                    </Flex>
                </FormControl>
            </Box>
        </Flex>
    </>
}

export default SimpleQuizQuestion