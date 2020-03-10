const fs = require('fs')
const superagent = require('superagent');

function imprimirMuseos(error, respuesta) {
  if (error) {
    throw new Error('algo se rompió', error);
  }
  const cantidad = respuesta.body.count;
  const museos = respuesta.body.results;
    
  console.log(`Se encontraron ${cantidad} museos.`);
  
  for (var i=0; i < cantidad; i++){
    console.log(`el museo se llama ${museos[i].nombre}.`)
    
  }
fs.writeFile('./assets/museos.txt', 'utf8', terminar);
  
}
//la funcion de superacion recibe dos paraetros, la primera es el error y lo que recibe, lo que nos va a interesar es el body,
//va a ejecutar lo que le pedimos y va a escribir el archivo, puede transformar la lista en la lista de string y despues llama a la siguiente funcion
//si armamos todo en la funcion llamada datos write(museos.txt, datos, terminar)
//crear la funcion terminar que genera si hay error un alerta y sino un fin en console log
superagent
  .get('https://www.cultura.gob.ar/api/v2.0/museos')
  .query({ format: 'json' })
  .end(imprimirMuseos)

function terminar(error){
      if (error !== null) {
        console.error('Algo salió mal :(')
        console.error(error)
      } else {
        console.log(`El archivo termino`)
      }
    
  }

//Escribir los resultados de la request en un archivo llamado museos.txt. Debe haber una línea por cada museo, 
//con este formato: NOMBRE (DIRECCION). Por cualquier consulta comunicarse al TELEFONO.
//
