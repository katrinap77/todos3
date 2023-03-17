const request = require("supertest");
const app = require("./app.js");

describe("Test route for GET todos", () => {
  test("Get /todos  SQL query should displaying results", async () => {
    const expectedBody = [
      {
        id: 1,
        description: "Must do some artwork",
      },
      {
        id: 2,
        description: "Must tidy up gardens",
      },
      {
        id: 3,
        description: "Must apply for jobs",
      },
      {
        id: 4,
        description: "create app",
      },
    ];
    const response = await request(app)
      .get("/todos")
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
    expect((response) => {
      expect(response.body).toEqual(expectedBody);
    });
  });
});
