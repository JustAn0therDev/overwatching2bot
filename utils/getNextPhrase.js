const phraseList = require('./phrase_list.json');
const { writeFile } = require('fs/promises');

module.exports = async function getNextPhrase() {
    let nextPhraseObject;
    const lastTweetedPhraseObject = phraseList.phrases.find(f => f.lastTweeted);
    const indexOflastTweetedPhraseObject = phraseList.phrases.indexOf(lastTweetedPhraseObject);

    if (indexOflastTweetedPhraseObject == -1 || indexOflastTweetedPhraseObject + 1 > phraseList.phrases.length - 1)
        nextPhraseObject = phraseList.phrases[0];
    else
        nextPhraseObject = phraseList.phrases[indexOflastTweetedPhraseObject + 1];

    if (lastTweetedPhraseObject)
        lastTweetedPhraseObject.lastTweeted = false;
        
    nextPhraseObject.lastTweeted = true;


    // creating a byte array from a buffer
    const data = new Uint8Array(Buffer.from(JSON.stringify(phraseList)));

    await writeFile(`${__dirname}\\phrase_list.json`, data, { encoding: 'utf-8' });

    return nextPhraseObject.phrase;
}
