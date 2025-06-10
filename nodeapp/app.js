import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import connectMongoose from "./lib/connectMongoose.js";
import * as homeController from "./controllers/homeController.js";
import * as loginController from "./controllers/loginController.js";
import * as agentsController from "./controllers/agentsController.js";
import * as sessionManager from "./lib/sessionManager.js";
import * as ejs from "ejs";

// Usar una forma compatible con entornos de test para obtener __dirname
let dirname;
try {
  dirname = path.dirname(fileURLToPath(import.meta.url));
} catch (error) {
  // Fallback para entornos de test
  dirname = ".";
}

const app = express();

app.set("views", "views"); // views folder
app.set("view engine", "html");
app.engine("html", ejs.__express);

app.locals.appName = "NodeApp";

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(dirname, "public")));

/**
 * Application routes
 */
app.use(sessionManager.middleware);
app.use(sessionManager.useSessionInViews);
app.get("/", homeController.index);
app.get("/login", loginController.index);
app.post("/login", loginController.postLogin);
app.get("/logout", loginController.logout);
app.get("/agents/new", sessionManager.guard, agentsController.index);
app.post("/agents/new", sessionManager.guard, agentsController.postNew);
app.get(
  "/agents/delete/:agentId",
  sessionManager.guard,
  agentsController.deleteAgent
);

// Ejemplos
app.get("/param_in_route/:num?", homeController.paranInRoute);
app.get(
  "/param_in_route_multiple/:product/size/:size([0-9]+)/color/:color",
  homeController.paranInRouteMultiple
);
app.get(
  "/param_in_query",
  homeController.validateParamInQuery,
  homeController.paramInQuery
);
app.post("/post_with_body", homeController.postWithBody);

// catch 404 and send error
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // manage validation errors
  if (err.array) {
    err.message =
      "Invalid request: " +
      err
        .array()
        .map((e) => `${e.location} ${e.type} "${e.path}" ${e.msg}`)
        .join(", ");
    err.status = 422;
  }

  res.status(err.status || 500);

  // set locals, including error information in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODEAPP_ENV === "development" ? err : {};

  res.render("error");
});

export default app;
