import http from "node:http";
import app from "./app.js";
import connectMongoose from "./lib/connectMongoose.js";

const port = process.env.PORT || 3000;

await connectMongoose(); // top level await thanks to ES modules
console.log("Connected to MongoDB.");

// create http server
const server = http.createServer(app);

server.on("error", (err) => console.error(err));
server.on("listening", () => {
  console.log(`Server started on http://localhost:${port}`);
});
server.listen(port);
