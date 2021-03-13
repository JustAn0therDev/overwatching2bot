const crypto = require('crypto');
const oauth1a = require('oauth-1.0a');
const tokens = require('../configs.json');

const CONSUMERKEY = tokens.consumerKey;
const CONSUMERSECRET = tokens.consumerSecret;
const TOKENKEY = tokens.accessToken;
const TOKENSECRET = tokens.tokenSecret;

module.exports = async function getOAuthHeader(url, method) {
    const oauth = oauth1a({
        consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
            return crypto
                .createHmac('sha1', key)
                .update(base_string)
                .digest('base64')
        },
    })

    const authorization = oauth.authorize({ url, method }, {
        key: TOKENKEY,
        secret: TOKENSECRET,
    });

    return oauth.toHeader(authorization);
}
