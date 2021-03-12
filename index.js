const axios = require('axios').default;
const Oauth1Helper = require('./utils/getOAuthHeader.js');
const getOverwatch2ReleaseStatus = require('./getOverwatch2ReleaseStatus.js');

async function getOverwatch2StatusFromWebDriver() {
    try {
        const releaseStatus = await getOverwatch2ReleaseStatus();
        console.log(`Current release status: ${releaseStatus}`); 
        
        // await tweetOverwatch2ReleaseStatus(releaseStatus);
        await tweetOverwatch2ReleaseStatus("We can't be salty in Overwatch 2 yet.");
    } catch (error) {
        console.log(`Something unexpected has happened during the execution of the program. ${error}`);
    }
}

// TODO: 
// 1 -> Create an array of catch-phrases for the bot to tweet
// 2 -> The current catch-phrase will have to need a state of "current phrase", so it does not repeat 
// in the tweets
// 3 -> Separate all functions to their own files

async function tweetOverwatch2ReleaseStatus(releaseStatus) {
    const twitterApiUrl = `https://api.twitter.com/1.1/statuses/update.json?status=${releaseStatus}`;
    await axios.post(twitterApiUrl, {}, {
        headers: Oauth1Helper.getAuthHeaderForRequest(twitterApiUrl, 'POST')
    });
}

getOverwatch2StatusFromWebDriver();
