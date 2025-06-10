import mongoose from 'mongoose'

export default function connectMongoose() {
  return mongoose.connect(process.env.MONGODB_CONNSTR)
    .then(mongoose => mongoose.connection)
}

