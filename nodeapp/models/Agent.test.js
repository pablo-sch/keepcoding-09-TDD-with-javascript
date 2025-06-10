import Agent from "./Agent.js";

describe("Agent Model & schema", () => {
  it("Deberia requerir un nombre y una edad valida", async () => {
    let error;
    // Crear un agente incorrecto
    const agent = new Agent({
      name: "John Doe",
      age: -5, // Edad inválida
    });
    try {
      //Validarlo
      await agent.validate();
    } catch (er) {
      error = er;
    }
    //Asegurarnos de que no pasa la validación
    console.log(error);
    expect(error).toBeDefined();
    expect(error.errors.age).toBeDefined();
  });

  it("deberia aceptar una edad valida", async () => {
    let error;
    // Crear un agente incorrecto
    const agent = new Agent({
      name: "John Two",
      age: 19, // Edad inválida
    });
    try {
      //Validarlo
      await agent.validate();
    } catch (er) {
      error = er;
    }
    //Asegurarnos de que no pasa la validación
    //console.log(error);
    expect(error).not.toBeDefined();
    expect(error).toBeUndefined();
  });
});
