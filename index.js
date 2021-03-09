const getOverwatch2ReleaseStatus = require('./getOverwatch2ReleaseStatus.js')

async function tweetOverwatch2Status() {
    try {
        const releaseStatus = await getOverwatch2ReleaseStatus();
        console.log(releaseStatus);
    } catch (error) {
        console.log(`Something unexpected has happened during the execution of the program. Error: ${error}`);
    }
}

tweetOverwatch2Status();