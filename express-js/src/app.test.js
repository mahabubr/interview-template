const request = require("supertest");
const app = require("./app");

describe("GET /mutual-connections", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
});
