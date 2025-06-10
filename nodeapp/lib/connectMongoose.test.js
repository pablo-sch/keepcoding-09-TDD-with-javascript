import connectMongoose from "./connectMongoose.js";
import mongoose, { connection } from "mongoose";

jest.mock("mongoose");

describe("connectMongoose", () => {
  /* 
  //1.1 Versión Clasica. Conexión directa a MongoDB:
  it("Deberia devolver una promesa  que resuelve una conexion", async () => {
    const connection = await connectMongoose();
    expect(connection).toBeDefined();
    expect(connection.name).toBeDefined();
    await connection.close();
  });
  */

  mongoose.connect.mockResolvedValue({
    connection: {
      name: "mockName",
      close: jest.fn(),
    },
  });

  let connection;
  beforeEach(async () => {
    connection = await connectMongoose();
  });

  //1.2 Versión con mocks:
  it("Deberia devolver una promesa  que resuelve una conexion", async () => {
    //const connection = await connectMongoose();
    expect(connection).toBeDefined();
    expect(connection.name).toBeDefined();
    await connection.close();
  });

  it("Deberia llamar a mongoose.connect al iniciar una conexion", async () => {
    //const connection = await connectMongoose();
    const spy = jest.spyOn(mongoose, "connect");
    expect(spy).toHaveBeenCalled();
    await connection.close();
  });
});
