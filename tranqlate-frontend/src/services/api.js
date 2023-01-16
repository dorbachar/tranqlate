const TRANQ_BACKEND_ADDRESS = "http://localhost:8080/";
const TRANSLATE_ENDPOINT_NAME = "translate";
const GET_LANGUAGES_ENDPOINT_NAME = "getLanguages";

export const translateText = async (input, sourceLanguage, targetLanguage) => {
    let translation
    await fetch(TRANQ_BACKEND_ADDRESS + TRANSLATE_ENDPOINT_NAME +
        "?input=" + input +
        "&sourceLanguage=" + sourceLanguage +
        "&targetLanguage=" + targetLanguage)
        .then(response => {
            return response.json()
        })
        .then(result => {
            translation = result
        })
    return translation
}

export const getLanguages = async () => {
    let languages
    await fetch(TRANQ_BACKEND_ADDRESS + GET_LANGUAGES_ENDPOINT_NAME)
        .then(response => {
            return response.json()
        })
        .then(result => {
            languages = result
        })
    return languages
}