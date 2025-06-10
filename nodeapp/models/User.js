import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const loginRecordSchema = new Schema(
  {
    timestamp: { type: Date, default: Date.now },
    ip: { type: String, required: true },
  },
  { _id: false }
);

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  loginRecords: [loginRecordSchema],
});

// método del modelo
userSchema.statics.hashPassword = (clearPassword) => {
  return bcrypt.hash(clearPassword, 7);
};

// método de las instancias de usuario
// en métodos de instancia, no usamos arrow functions para no cambiar el this que pone Mongoose
userSchema.methods.comparePassword = function (clearPassword) {
  // this --> user
  return bcrypt.compare(clearPassword, this.password);
};

// método para añadir un registro de inicio de sesión
userSchema.methods.addLoginRecord = function (ip, timestamp = new Date()) {
  if (!this.loginRecords) {
    this.loginRecords = [];
  }

  this.loginRecords.push({ ip, timestamp });

  // Ordenamos los registros por fecha (cronológicamente)
  this.loginRecords.sort((a, b) => a.timestamp - b.timestamp);

  return this;
};

const User = mongoose.model("User", userSchema);

export default User;
