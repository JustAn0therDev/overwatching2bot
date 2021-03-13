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
        console.log(`Something unexpected happened during the execution of this program. ${error}`);
    }
}

/* 
 * There is no way to wait for the whole process to complete since there is 
 * no top-level await. So for this, we have to just call a "void" function at let it
 * call the rest of the workflow for getting the information and tweeting only by awaiting
 * promises
 */ 
getOverwatch2StatusFromWebDriver(); 
