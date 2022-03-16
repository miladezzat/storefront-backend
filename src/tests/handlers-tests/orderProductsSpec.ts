import request from "supertest";
import app from "../../server";

describe("GET /orders/get-order/:id", () => {
  it("should return an array of orders", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const res = await request(app)
      .get("/orders/get-order/2")
      .set("Authorization", token.body);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

describe("POST /orders/new-product", () => {
  it("should return an array of orders", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const res = await request(app)
      .post("/orders/new-product")
      .send({
        order_id: 2,
        product_id: 5,
        quantity: 10,
      })
      .set("Authorization", token.body);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
