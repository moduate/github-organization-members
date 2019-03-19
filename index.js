const fetch = require('node-fetch');

exports.getOrganisation = function(orgName) {
  return fetch(`https://api.github.com/orgs/${orgName}`)
    .then(res => res.json())
    .then(json => json)
    .catch(e => {error: e});
}

exports.getOrganization = exports.getOrganisation;
