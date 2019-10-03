const Client = require('spotinst-sdk-nodejs').Client;
const config = require('spotinst-sdk-nodejs').config;

function setupClient(accountId, token) {
    const clientOpts = [
        config.setToken(token),
        config.setAccount(accountId)
    ];
    return new Client(...clientOpts);
}

function listAllElastiGroup(action, settings) {
    return new Promise((resolve, reject) => {
        const token = settings.TOKEN || action.params.TOKEN;
        const accountId = settings.ACCOUNT_ID || action.params.ACCOUNT_ID
        let client = setupClient(accountId, token);
        return client.AwsGroupService.list()
            .then((groups) => {
                return resolve(groups)
            })
            .catch((err) => {
                return reject(err)
            });
    })
}

module.exports = {
    listAllElastiGroup
}