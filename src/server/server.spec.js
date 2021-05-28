const app = require("./index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("gets the test endpoint", () => {
  request.get("/info").then((response) => {
    expect(response.statusCode).toBe(200);
  });
});
