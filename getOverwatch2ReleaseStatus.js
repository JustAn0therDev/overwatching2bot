const getElementTextContentByUrlAndCssSelectorFromWebDriver = require('./utils/getElementTextContentByUrlAndCssSelectorFromWebDriver')

module.exports = async function getOverwatch2ReleaseStatus() {
    const elementTextContentWithOverwatch2Status = 
    await getElementTextContentByUrlAndCssSelectorFromWebDriver('https://us.battle.net/support/en/article/255146', '.article-body p')

    if (!elementTextContentWithOverwatch2Status)
        return { status: 500, message: 'Sentence element not found! Please check the webpage' }

    if (elementTextContentWithOverwatch2Status.toLowerCase().includes('we have not announced a release date')) {
        return { status: 200, message: "We can't be salty in Overwatch 2 yet" }
    }
    
    return { status: 200, message: `Info has finally been updated! It is now: ${elementTextContentWithOverwatch2Status}` }
}