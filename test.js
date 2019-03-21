const fetch = require('node-fetch');
const gom = require('.');

const BASE_URL = "https://api.github.com";

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
    const data = await gom.getOrganization("Moduate");
    expect(data.name).toBe("Moduate");
  });
})

describe('Calling getOrganisation', () => {
  test('passing "Moduate" as an argument returns the Moduate organization object', async () => {
    const data = await gom.getOrganisation("Moduate");
    expect(data.name).toBe("Moduate");
  });
})
