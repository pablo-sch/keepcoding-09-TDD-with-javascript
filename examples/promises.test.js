import { failedRequest, successfullRequest } from "./promises";
// CallBack Style----------------------------------------------------------------------------------------
describe("CallBack Style", () => {
  it("Debe de devolver un codigo de estado 200 cuando llamamos a successfullRequest", (done) => {
    successfullRequest().then((response) => {
      expect(response.status).toBe(200);
      //expect(response.headers["Conent-Lenght"]).toEqual(0); (X)
      expect(response.headers["content-length"]).toBe("0");
      //expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");

      done();
    });
  }, 10000); // Se puede configurar un timeout personalizado. Por defecto es 5000

  it("Debe de devolver un codigo 403 cuando llamamos a failRequest", (done) => {
    failedRequest()./* then (X) (promesa cumplida)*/ catch((response) => {
      expect(response.status).toEqual(403);

      done();
    });
  }, 10000);
});

// Resolves Style----------------------------------------------------------------------------------------
describe("Resolves / Rejects Style", () => {
  it.only("Debe de devolver un codigo de estado 200 cuando llamamos a successfullRequest", () => {
    return expect(successfullRequest()).resolves.toContainEntry([
      "status",
      200,
    ]);
  });

  it.only("Debe de devolver un codigo de estado 403 cuando llamamos a failRequest", () => {
    return expect(failedRequest()).rejects.toContainEntry(["status", 403]);
  });
});

// Async/Await Style---------------------------------------------------------------------------------------
describe("Async / Await Style", () => {
  it.only("Debe de devolver un codigo de estado 200 cuando llamamos a successfullRequest", async () => {
    expect.assertions(2);
    const response = await successfullRequest();
    expect(response.status).toEqual(200);
    expect(response.headers["content-length"]).toBe("0");
  });

  it.only("Debe de devolver un codigo de estado 403 cuando llamamos a failRequest", async () => {
    try {
      const response = await failedRequest();
    } catch (error) {
      expect(error.response.status).toEqual(403);
    }
  });
});
