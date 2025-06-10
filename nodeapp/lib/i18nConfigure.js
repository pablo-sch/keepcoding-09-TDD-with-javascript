import { I18n } from 'i18n'
import path from 'node:path'
import { __dirname } from './utils.js'

const i18n = new I18n({
  locales: ['en', 'es'],
  directory: path.join(__dirname, '..', 'locales'),
  defaultLocale: 'en',
  autoReload: true, // watch for changes in JSON files to reload locale on updates - defaults to false
  syncFiles: true, // sync locale information across all files - defaults to false
})

export default i18n