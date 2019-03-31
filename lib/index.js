"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPublicUsersFromOrg = exports.getOrganization = exports.getOrganisation = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getOrganisation = orgName => (0, _nodeFetch.default)(`https://api.github.com/orgs/${orgName}`).then(res => res.json()).then(json => json).catch(e => {
  error: e;
});

exports.getOrganisation = getOrganisation;
const getOrganization = getOrganisation;
exports.getOrganization = getOrganization;

const getPublicUsersFromOrg = async (orgName, cb) => {
  const org = await exports.getOrganisation(orgName);

  try {
    const publicMembersUrl = org.public_members_url.replace(/{.*}/g, '');
    return (0, _nodeFetch.default)(publicMembersUrl).then(res => res.json()).then(json => cb(null, json));
  } catch (error) {
    return cb(error, null);
  }
};

exports.getPublicUsersFromOrg = getPublicUsersFromOrg;
