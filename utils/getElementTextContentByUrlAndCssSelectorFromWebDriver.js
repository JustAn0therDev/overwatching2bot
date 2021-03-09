require('chromedriver');
const { Builder, By } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

module.exports = async function getElementTextContentByUrlAndCssSelectorFromWebDriver(url, cssSelector) {
    const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();

    await driver.get(url);
    const foundElement = await driver.findElement(By.css(cssSelector));

    if (!foundElement)
        // returning a falsy value; that way the client code knows the element and/or content wasn't found
        return '';

    return await foundElement.getText();
}