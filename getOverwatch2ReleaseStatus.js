const getWebDriver = require('./utils/getWebDriver.js')
const getCssSelectorObject = require('./utils/getCssSelectorObject')

// TODO: Separate any knowledge this function has about the current webdriver in use
// It can (and might have to) know about using webdrivers, but not which
module.exports = async function getOverwatch2ReleaseStatus() {
    const overwatch2ReleaseDateArticleLink = 'https://us.battle.net/support/en/article/255146'

    const driver = await getWebDriver()

    await driver.get(overwatch2ReleaseDateArticleLink)
    const pElementWithOverwatch2ReleaseStatus = await driver.findElement(
        await getCssSelectorObject('.article-body p')
        )

    if (!pElementWithOverwatch2ReleaseStatus)
        return { status: 500, message: 'Sentence element not found! Please check the webpage' }

    const sentence = await pElementWithOverwatch2ReleaseStatus.getText()

    if (sentence.toLowerCase().includes('we have not announced a release date')) {
        return { status: 200, message: "We can't be salty in Overwatch 2 yet" }
    }
    
    return { status: 200, message: `The site was finally updated! The info is now: ${sentence}` }
}