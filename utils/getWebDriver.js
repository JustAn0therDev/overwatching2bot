require('chromedriver')
const { Builder } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome')

module.exports = function getWebDriver() {
  return new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
};
