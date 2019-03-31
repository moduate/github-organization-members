import fetch from 'node-fetch';

export const getOrganisation = orgName =>
  fetch(`https://api.github.com/orgs/${orgName}`)
    .then(res => res.json())
    .then(json => json)
    .catch(e => {error: e});

export const getOrganization = getOrganisation;

export const getPublicUsersFromOrg = async (orgName, cb) => {
  const org = await exports.getOrganisation(orgName);
  try {
    const publicMembersUrl = org.public_members_url.replace(/{.*}/g, '');
    return fetch(publicMembersUrl)
      .then(res => res.json())
      .then(json => cb(null, json));
  } catch(error) {
    return cb(error, null);
  }
}
