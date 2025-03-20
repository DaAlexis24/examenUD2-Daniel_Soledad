import express from 'express'; // importamos el framework
import type { Request, Response } from 'express'; //Importamos los tipos req y res que nos ayudarán a construir las funciones que configuraran nuestros endpoints
import { v4 as uuidv4 } from 'uuid'; // Esto nos ayudará a crear ids en formato uuid a la hora de crear nuevos datos
import { mockProducts } from './mock'; // Importamos nuestros datos iniciales
import createDebug from 'debug'; // Esto nos ayudará a enseñar mensajes personalizados en nuestra consola

const app = express(); // Creamos la instancia de Express
const debug = createDebug('products:api'); // Instanciamos debug

debug('Iniciando API REST - Products-powered by DS-Network'); // mensaje de inicio
app.disable('x-powered-by'); // Esto lo realizamos para ocultar la cabecera de Express cada vez que se realiza una petición a nuestra API mediante HTTP

app.use(express.json()); // Este middleware nos permite parsear las peticiones que realizaremos con POSTMAN como si fueran un JSON

let products = [...mockProducts];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
