const fs = require('fs');
const path = require('path');
const phraseList = require('./phrase_list.json');

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

    fs.writeFileSync(`${__dirname}\\phrase_list.json`, JSON.stringify(phraseList), { encoding: 'utf-8' });

    return nextPhraseObject.phrase;
}