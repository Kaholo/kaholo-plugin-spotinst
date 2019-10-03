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
    const token = settings.TOKEN || action.params.TOKEN;
    const accountId = settings.ACCOUNT_ID || action.params.ACCOUNT_ID
    let client = setupClient(accountId, token);
    return client.AwsGroupService.list()
        .then((groups) => {
            return groups
            // do something with groups
        })
        .catch((err) => {
            return `error ${err}`
            // do something with err
        });
}

module.exports = {
    listAllElastiGroup
}