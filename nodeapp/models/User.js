import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String
})

// método del modelo
userSchema.statics.hashPassword = (clearPassword) => {
  return bcrypt.hash(clearPassword, 7)
}

// método de las instancias de usuario
// en métodos de instancia, no usamos arrow functions para no cambiar el this que pone Mongoose
userSchema.methods.comparePassword = function(clearPassword) {
  // this --> user
  return bcrypt.compare(clearPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User