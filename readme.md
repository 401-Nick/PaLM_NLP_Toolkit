# palm_toolkit

**palm_toolkit** is a JavaScript module that simplifies various text-related tasks using the Google's PaLM API. This toolkit includes functions for text generation, translation, summarization, sentiment analysis, question answering, and text classification.

## Installation

To use **palm_toolkit** in your JavaScript project, you can install it using npm:

```bash
npm install palm_toolkit
```

## Usage

```javascript
const palm_toolkit = require('palm_toolkit');

// Example 1: Translate Text
const translatedText = await palm_toolkit.translateText('Hello, world!', 'English', 'French');

// Example 2: Summarize Text
const summary = await palm_toolkit.summarizeText('A long piece of text...', 2);

// Example 3: Analyze Sentiment
const sentimentScore = await palm_toolkit.analyzeSentiment('I am feeling great today!');

// Example 4: Answer Question
const answer = await palm_toolkit.answerQuestion('What is the capital of France?', 'Paris is the capital of France.');

// Example 5: Classify Text
const categories = await palm_toolkit.classifyText('This is a news article about technology.');

console.log('Translated Text:', translatedText);
console.log('Summary:', summary);
console.log('Sentiment Score:', sentimentScore);
console.log('Answer:', answer);
console.log('Categories:', categories);
```

## API Reference

### `translateText(textToTranslate, sourceLanguage, targetLanguage)`

Translates text from one language to another.

- `textToTranslate` (string): The text to translate.
- `sourceLanguage` (string): The source language of the text.
- `targetLanguage` (string): The target language for translation.
- Returns: A Promise that resolves to the translated text.

### `summarizeText(inputText, summaryLength)`

Summarizes input text into a specified number of sentences.

- `inputText` (string): The input text to summarize.
- `summaryLength` (number): The number of sentences the summary should contain.
- Returns: A Promise that resolves to the summarized text.

### `analyzeSentiment(textToAnalyze)`

Analyzes the sentiment of input text and provides a sentiment analysis rating.

- `textToAnalyze` (string): The text whose sentiment needs to be analyzed.
- Returns: A Promise that resolves to the sentiment analysis rating.

### `answerQuestion(question, contextText)`

Answers a question based on context and question text.

- `question` (string): The question to be answered.
- `contextText` (string): The context text that provides information for answering the question.
- Returns: A Promise that resolves to the text response.

### `classifyText(textToClassify)`

Classifies input text into predefined categories.

- `textToClassify` (string): The text to be classified.
- Returns: A Promise that resolves to a comma-separated plain text list of categories.

## Configuration

Before using the **palm_toolkit**, make sure to set your API key in the `.env` file:

```
PALM_API_KEY=YOUR_API_KEY
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built using the Google's PaLM API.

## Author

- [401-Nick](https://github.com/401-Nick)