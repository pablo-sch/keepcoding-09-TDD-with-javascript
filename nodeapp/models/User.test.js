import User from "./User";

describe("User model & schema", () => {
  it("Debería hashear correctamente la contraseña", async () => {
    // Crear un password plano
    const clearPassword = "supersegura";

    // Crear su hash
    const hash = await User.hashPassword(clearPassword);

    // Verificar que son diferentes
    expect(hash).not.toBe(clearPassword);
    expect(hash.length).toBeGreaterThan(1);
    expect(hash).not.toHaveLength(0);
  });

  it.todo("Debería generar el hash utilizando la utilidad bcrypt");

  it("Debería comparar correctamente la contraseña", async () => {
    expect.assertions(2);
    // Al crear un usuario, crear su hash y compararlo con el password plano, deberia ser true.
    // Crear un password plano
    const clearPassword = "supersegura";

    // Crear su hash
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
