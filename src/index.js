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
  // if not org.id, then an invalid org name was passed into getOrganisation
  // and we should return early
  if(!org.id) {
    return org;
  }
  let publicMembersUrl;
  try {
    publicMembersUrl = org.public_members_url.replace(/{.*}/g, '');
  } catch(error) {
    return cb(error, null);
  }
  return fetch(publicMembersUrl)
    .then(res => res.json())
    .then(json => cb(null, json))
    .catch(e => cb(error, null));
}
