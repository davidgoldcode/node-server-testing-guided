const supertest = require("supertest");
const { intersect } = require("../data/dbConfig.js");

const server = require("./server.js");

describe("server.js", () => {
  describe("GET /", () => {
    it("should return 200 OK", () => {
      // add return because it's async
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should return api & up", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("up");
        });
    });

    it("should return JSON", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/JSON/i);
        });
    });
  });
});

// the res object has a property called body
// write a test for "the body has an api property & the value is "up"
