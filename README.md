# github-organization-members

[![license](https://img.shields.io/npm/l/github-organization-members.svg)](https://github.com/moduate/github-organization-members/blob/master/LICENSE) [![version](https://img.shields.io/npm/v/github-organization-members.svg)](https://www.npmjs.com/package/github-organization-members) ![AppVeyor](https://img.shields.io/appveyor/ci/Jason-Cooke/github-organization-members.svg) ![downloads](https://img.shields.io/npm/dt/github-organization-members.svg)

This package returns a list of public users, belonging to a Github organization.

## Install Package
```
npm i github-organization-members

```

## Quick Start
```
const { getPublicUsersFromOrg } = require('github-organization-members');

const orgName = "Moduate";  // Replace Moduate with your organization name
getPublicUsersFromOrg(orgName, (error, members) => {
  if(error) {
    console.log(error);
  }
  console.log(members);
});
```
