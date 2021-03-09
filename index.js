const axios = require('axios').default;
const getOverwatch2ReleaseStatus = require('./getOverwatch2ReleaseStatus.js')

async function getOverwatch2StatusFromWebDriver() {
    try {
        const releaseStatus = await getOverwatch2ReleaseStatus();
        console.log(releaseStatus);
    } catch (error) {
        console.log(`Something unexpected has happened during the execution of the program. Error: ${error}`);
    }
}

async function tweetOverwatch2ReleaseStatus(releaseStatus) {
    const twitterApiUrl = 'https://api.twitter.com/1.1/statuses/update.json';

    // TODO: the authentication info will be in a "git-ignored" JSON file.
    axios.post(twitterApiUrl, { status: releaseStatus }, {
        headers: {

        }
    });
}

getOverwatch2StatusFromWebDriver();