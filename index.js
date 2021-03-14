const getNextPhrase = require('./utils/getNextPhrase.js');
const getOverwatch2ReleaseStatus = require('./getOverwatch2ReleaseStatus.js');
const tweetOverwatch2ReleaseStatus = require('./tweetOverwatch2ReleaseStatus.js');

async function getOverwatch2StatusFromWebDriver() {
    try {
        const releaseStatus = await getOverwatch2ReleaseStatus();
        console.log(`Current release status: ${releaseStatus}`);

        const phrase = await getNextPhrase();
        
        await tweetOverwatch2ReleaseStatus(phrase);
    } catch (error) {
        console.log(`Something unexpected happened during the execution of the program. ${error}`);
    }
}

getOverwatch2StatusFromWebDriver();