import mongoose from "mongoose";

export default function connectMongoose() {
  return mongoose
    .connect("mongodb://localhost/cursonode")
    .then((mongoose) => mongoose.connection);
}
