import words from '../data/words.json';

function getRandomWords(numberOfWords : number): Array<string> {
    const wordsArray = words.palabras;
    const randomWords = [];
    for (let i = 0; i < numberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        randomWords.push(wordsArray[randomIndex]);
    }
    return randomWords;
}

export default getRandomWords;