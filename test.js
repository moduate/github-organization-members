const fetch = require('node-fetch');
const gom = require('./src');

const BASE_URL = "https://api.github.com";
const ORGANIZATION_NAME = "Moduate";

describe('Calling getOrganization', () => {
  test('passing an empty string as argument, fails with "Not Found"', async () => {
    const data = await gom.getOrganization("");
    expect(data.message).toBe("Not Found");
  });
  test('passing no argument, fails with "Not Found"', async () => {
    const data = await gom.getOrganization();
    expect(data.message).toBe("Not Found");
  });
  test('passing a company that does not exist as an argument, fails with "Not Found"', async () => {
    const data = await gom.getOrganization("#@%@#%");
    expect(data.message).toBe("Not Found");
  });
  test('passing "Moduate" as an argument returns the Moduate organization object', async () => {
    const data = await gom.getOrganization(ORGANIZATION_NAME);
    expect(data.name).toBe(ORGANIZATION_NAME);
  });
})

describe('Calling getOrganisation', () => {
  test('passing "Moduate" as an argument returns the Moduate organization object', async () => {
    const data = await gom.getOrganisation(ORGANIZATION_NAME);
    expect(data.name).toBe(ORGANIZATION_NAME);
  });
})

describe('Get Members', () => {
  test('Passing Moduate as an argument, returns at least one public member', async () => {
    const members = await gom.getPublicUsersFromOrg(ORGANIZATION_NAME, (error, response) => {
      if(error) {
        throw error;
      }
      return response;
    });
    console.log(members)
    expect(members).not.toHaveLength(0);
  });
})
