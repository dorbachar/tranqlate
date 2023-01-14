const TRANQ_BACKEND_ADDRESS = "http://localhost:8080/";
const TRANSLATE_ENDPOINT_NAME = "translate";

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