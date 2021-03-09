const getElementTextContentByUrlAndCssSelectorFromWebDriver = require('./utils/getElementTextContentByUrlAndCssSelectorFromWebDriver')

module.exports = async function getOverwatch2ReleaseStatus() {
    const elementTextContentWithOverwatch2Status = 
    await getElementTextContentByUrlAndCssSelectorFromWebDriver('https://us.battle.net/support/en/article/255146', '.article-body p');

    if (!elementTextContentWithOverwatch2Status)
        return 'Sentence element not found! Please check the webpage';

    if (elementTextContentWithOverwatch2Status.toLowerCase().includes('we have not announced a release date'))
        return "Overwatch 2 does not have a release date yet.";
    
    return `Info has finally been updated! It is now: ${elementTextContentWithOverwatch2Status}`;
}