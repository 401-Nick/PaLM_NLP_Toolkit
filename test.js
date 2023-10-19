const palm_toolkit = require('./palm_toolkit.js'); // Replace with the actual path to your code file

async function test() {
    // Test the functions here
    const translatedText = await palm_toolkit.translateText('Hello', 'English', 'French');
    console.log('Translated Text:', translatedText);

    const summarizedText = await palm_toolkit.summarizeText('This is a long piece of text...', 2);
    console.log('Summarized Text:', summarizedText);

    const sentimentScore = await palm_toolkit.analyzeSentiment('I love this product!');
    console.log('Sentiment Score:', sentimentScore);

    const answer = await palm_toolkit.answerQuestion('What is the capital of France?', 'Paris is the capital of France.');
    console.log('Answer:', answer);

    const categories = await palm_toolkit.classifyText('This is a news article about technology.');
    console.log('Categories:', categories);
}

test();
