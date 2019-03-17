const fetch = require('node-fetch');

exports.getOrganisation = function(orgName) {
  fetch(`https://api.github.com/orgs/${orgName}`)
    .then(res => res.json())
    .then(json => console.log(json))
}
