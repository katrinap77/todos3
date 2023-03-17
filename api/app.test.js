const request = require("supertest");
const app = require("./app.js");

describe("Test route for GET todos", () => {

    test("Get /todos  SQL query should displaying results", async () => {
      const expectedBody = 
        [
            {
              id: 1,
              description: "Must do lifts"
            },
            {
              id: 2,
              description: "Must do squats"
            },
            {
              id: 3,
              description: "Must do plank"
            },
            {
              id: 4,
              description: "Must not be a lazybones"
            },
            {
              id: 5,
              description: "Make a cheesecake afterwards lol"
            },
            {
              id: 6,
              description: "Must go to bed on time"
            },
            {
              id: 7,
              "description": "Get eggs"
            },
            {
              id: 8,
              description: "Run a mile"
            },
            {
              id: 9,
              description: "Buy a new rabbit cage"
            },
            {
              id: 10,
              description: "Make a cheesecake"
            },
            {
              id: 15,
              description: "Buy a rose water torte cake."
            },
            {
              id: 16,
              description: "Buy a chocolate torte cake."
            }
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