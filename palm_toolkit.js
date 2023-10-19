const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
const dotenv = require("dotenv");
dotenv.config();

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.PALM_API_KEY;

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

/**
 * Generate text using the Text Service API.
 * @param {string} promptString The prompt for text generation.
 * @returns {Promise<string>} The generated text as a Promise.
 */
async function promptModel(promptString) {
    const result = await client.generateText({
        model: MODEL_NAME,
        temperature: 0.7,
        candidateCount: 1,
        top_k: 40,
        top_p: 0.95,
        max_output_tokens: 1024,
        prompt: {
            text: promptString,
        },
    });

    return result[0]["candidates"][0]["output"];

}

/**
 * Translate text from one language to another.
 * @param {string} textToTranslate The text to translate.
 * @param {string} sourceLanguage The source language of the text.
 * @param {string} targetLanguage The target language for translation.
 * @returns {Promise<string>} The translated text as a Promise.
 */
async function translateText(textToTranslate, sourceLanguage, targetLanguage) {
    const promptString = `Translate: ${textToTranslate} from ${sourceLanguage} to ${targetLanguage} and output only the translated sentence.`;

    return promptModel(promptString);
}

/**
 * Summarize input text into a specified number of sentences.
 * @param {string} inputText The input text to summarize.
 * @param {number} summaryLength The number of sentences the summary should contain.
 * @returns {Promise<string>} The summarized text as a Promise.
 */
async function summarizeText(inputText, summaryLength) {
    const promptString = `Summarize the content of ${inputText} into ${summaryLength} sentences and return as text.`;

    return promptModel(promptString);
}

/**
 * Analyze the sentiment of input text.
 * @param {string} textToAnalyze The text whose sentiment needs to be analyzed.
 * @returns {Promise<number>} The sentiment analysis result as a Promise.
 */
async function analyzeSentiment(textToAnalyze) {
    const promptString = `Analyze the sentiment of the following text: '${textToAnalyze}' and return the sentiment analysis rating -100 being the least, 0 being neutral, 100 being the most.`;

    const result = await promptModel(promptString);

    // Assuming the result.text contains a numeric sentiment score.
    return parseFloat(result);
}

/**
 * Answer a question based on context and question text.
 * @param {string} question The question to be answered.
 * @param {string} contextText The context text that provides information for answering the question.
 * @returns {Promise<string>} The text response as a Promise.
 */
async function answerQuestion(question, contextText) {
    const promptString = `Answer the question: '${question}' based on your overall knowledge and the additional context: '${contextText}' and return the text response.`;

    return promptModel(promptString);
}

/**
 * Classify input text into predefined categories.
 * @param {string} textToClassify The text to be classified.
 * @returns {Promise<string>} The classification result as a Promise.
 */
async function classifyText(textToClassify) {
    const promptString = `Classify the text: '${textToClassify}' into multiple predefined categories and return them in a comma-separated plain text list. NOT AN ARRAY.`;

    return promptModel(promptString);
}

module.exports = {
    translateText,
    summarizeText,
    analyzeSentiment,
    answerQuestion,
    classifyText,
};
