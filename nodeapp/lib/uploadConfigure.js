import multer from 'multer'
import path from 'node:path'
import { __dirname } from './utils.js'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const ruta = path.join(__dirname, '..', 'public', 'avatars')
    cb(null, ruta)
  },
  filename: function(req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`
    cb(null, filename)
  }
})

const upload = multer({ storage })

export default upload
