import mongoose, { Schema } from "mongoose";

// definir el esquema de los agentes
const agentSchema = new Schema(
  {
    name: String,
    age: { type: Number, min: 18, max: 130 },
    updated: { type: Date, default: Date.now },
    owner: { type: Schema.Types.ObjectId, ref: "User", index: true },
  },
  {
    collection: "agentes", // para forzar el nombre de la colección
  }
);

// crear el modelo
const Agent = mongoose.model("Agent", agentSchema);

export default Agent;
