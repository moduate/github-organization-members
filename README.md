# github-organization-members &middot; [![license](https://img.shields.io/npm/l/github-organization-members.svg)](https://github.com/moduate/github-organization-members/blob/master/LICENSE) [![version](https://img.shields.io/npm/v/github-organization-members.svg)](https://www.npmjs.com/package/github-organization-members) ![downloads](https://img.shields.io/npm/dt/github-organization-members.svg)

## Install Package
```
npm i github-organization-members

```

## Quick Start
```
const gom = require('github-organization-members');

const orgName = "Moduate";
gom.getPublicUsersFromOrg(orgName, (error, members) => {
  if(error) {
    console.log(error);
  }
  console.log(members);
});
```
