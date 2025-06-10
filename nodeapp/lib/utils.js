
// En CommonJS para referenciar la carpeta actual:
// __dirname

// En ESM (Node 20.11 o superior) usamos:
// import.meta.dirname

// En ESM en Node inferior a 20.11:
// import { dirname } from 'node:path'
// import { fileURLToPath } from 'node:url'
// export const __filename = fileURLToPath(import.meta.url)
// export const __dirname = dirname(__filename)

// import.meta.dirname existe desde la versión 20.11
export const __dirname = import.meta.dirname