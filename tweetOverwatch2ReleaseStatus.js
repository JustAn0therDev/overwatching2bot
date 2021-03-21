const axios = require('axios').default;
const getOAuthHeader = require('./utils/getOAuthHeader.js');

module.exports = async function tweetOverwatch2ReleaseStatus(releaseStatus) {
    const twitterApiUrl = `https://api.twitter.com/1.1/statuses/update.json?status=${releaseStatus}`;
    await axios.post(twitterApiUrl, {}, {
        headers: await getOAuthHeader(twitterApiUrl, 'POST')
    });
}
