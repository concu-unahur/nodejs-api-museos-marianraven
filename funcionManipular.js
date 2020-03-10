
const fs = require('fs');

function procesarArchivo(error, datos) {
  if (error !== null) {
    console.error('Algo salió mal :(')
    console.error(error)
  } else {
    // El trim le vuela los espacios de más
    const lineas = datos.trim().split('\n')
    console.log(`El archivo tiene ${lineas.length} líneas`)
  }
}

fs.writeFile('./assets/museos.txt', 'utf8', procesarArchivo);

console.log('Esta línea se ejecuta inmediatamente después de la anterior, leído el archivo o no')
