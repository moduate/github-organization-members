const fetch = require('node-fetch');

exports.getOrganisation = orgName => {
  if(!orgName) {
    return { message: "An organization is required" }
  }
  return fetch(`https://api.github.com/orgs/${orgName}`)
    .then(res => res.json())
    .then(json => json)
    .catch(e => {error: e});
}

exports.getOrganization = exports.getOrganisation;

exports.getPublicUsersFromOrg = async (orgName, cb) => {
  const org = await exports.getOrganisation(orgName);
  if(!org.id) {
    return org;
  }
  try {
    const publicMembersUrl = org.public_members_url.replace(/{.*}/g, '');
    return fetch(publicMembersUrl)
      .then(res => res.json())
      .then(json => cb(null, json));
  } catch(error) {
    return cb(error, null);
  }
}
