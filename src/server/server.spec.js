const request = require("supertest")
const app = require('../index')

it("gets the test endpoint", () => {
  request.get("/info").then((response) => {
    expect(response.statusCode).toBe(200);
  });
});
