import { User, UsersStore } from "../../models/user";

const store = new UsersStore();

describe("Index Method Users", () => {
  it("should return an array of users", async () => {
    const users = await store.index();
    expect(users).toBeInstanceOf(Array);
  });
});

describe("Create User Method", () => {
  it("should return a user", async () => {
    // @ts-ignore
    const newUser: User = {
      firstName: "John",
      lastName: "Doe",
      password: "password",
    };
    const user = await store.create(newUser);
    expect(user).toBeDefined();
  });
});

describe("Login User Method", () => {
  it("should return a user", async () => {
    // @ts-ignore
    const user: User = {
      firstName: "John",
      password: "password",
    };
    const user2 = await store.login(user);
    expect(user2).toBeDefined();
  });
});

describe("Show User Method", () => {
  it("should return a user", async () => {
    const user = await store.show(1);
    expect(user).toBeDefined();
  });
});

describe("Update User Method", () => {
  it("should return a user", async () => {
    // @ts-ignore
    const user: User = {
      firstName: "Milad",
      lastName: "Ezzat",
      password: "dazy123",
    };
    const user2 = await store.updateUser(1, user);
    expect(user2).toBeDefined();
  });
});