const { By } = require('selenium-webdriver')

// TODO: this function might have to know about the webdriver in use 
// (maybe receive whatever implementation is necessary in its parameters)
module.exports = async function getCssSelectorObject(cssSelector) {
    return By.css(cssSelector)
}