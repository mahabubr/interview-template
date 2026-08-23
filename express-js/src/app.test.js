const request = require("supertest");
const app = require("./app");

describe("GET /your-route", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return data successfully", async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        // mock external API response
      }),
    });

    const response = await request(app).get("/your-route");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      // expected API response
    });

    expect(fetch).toHaveBeenCalled();
  });

  test("should handle external API failure", async () => {
    fetch.mockResolvedValue({
      ok: false,
    });

    const response = await request(app).get("/your-route");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      err: expect.any(String),
    });
  });

  test("should handle unexpected error", async () => {
    fetch.mockRejectedValue(new Error("Something went wrong"));

    const response = await request(app).get("/your-route");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      err: "Something went wrong",
    });
  });
});
