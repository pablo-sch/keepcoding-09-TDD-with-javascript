import User from "./User.js";

//#######################################################################################################
describe("User model & schema", () => {
  //=========================================================================
  it("Should correctly hash the password", async () => {
    // Create a plain password
    const clearPassword = "supersegura";

    // Create its hash
    const hash = await User.hashPassword(clearPassword);

    // Verify that they are different
    expect(hash).not.toBe(clearPassword);
    expect(hash.length).toBeGreaterThan(1);
    expect(hash).not.toHaveLength(0);
  });

  //=========================================================================
  it.todo("Should generate the hash using the bcrypt utility");

  //=========================================================================
  it("Should correctly compare the password", async () => {
    expect.assertions(2);
    // When creating a user, generate its hash and compare it with the plain password, it should be true.
    // Create a plain password
    const clearPassword = "supersegura";

    // Create its hash
    const hash = await User.hashPassword(clearPassword);

    const user = new User({
      email: "demo@example.com",
      password: hash,
    });

    const matchPassword = await user.comparePassword(clearPassword);
    expect(matchPassword).toBeTrue();

    const notMatchPassword = await user.comparePassword("errorPassword");
    expect(notMatchPassword).toBeFalse();
  });
});

//#######################################################################################################
describe.only("TDD Exercise", () => {
  //=========================================================================
  it("Should have a loginRecords field that is an array", () => {
    const user = new User({ email: "test@example.com", password: "hash" });
    expect(Array.isArray(user.loginRecords)).toBeTrue();
    expect(user.loginRecords).toHaveLength(0);
  });

  //=========================================================================
  it("Each login record should have timestamp and ip", () => {
    const user = new User({ email: "test@example.com", password: "hash" });
    user.loginRecords.push({ ip: "127.0.0.1" });
    expect(user.loginRecords[0]).toHaveProperty("timestamp");
    expect(user.loginRecords[0]).toHaveProperty("ip");
  });
});
