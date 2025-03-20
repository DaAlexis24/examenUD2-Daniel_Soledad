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

let products = [...mockProducts]; // Copiamos el mock inicial

// Endpoint GET para obtener la lista de todos los productos
app.get('/products', (req: Request, res: Response) => {
    debug('Obteniendo todos los datos');
    res.status(200).json(products);
});

// Endpoint GET by ID para obtener un producto mediante su ID
app.get('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params; // Obtenemos el ID de los parámetros de la URL
    const product = products.find((p) => p.id === id); // buscamos el producto mediante la ID

    //Si no existe el producto realizamos la siguiente validación:
    if (!product) {
        debug(`No existe el registro con el ID: ${id}`);
        res.status(404).json();
        return;
        // AVISO: En cada condicional colocaré el return como una sentencia aparte para evitar una sobrecarga en los tipos de Request y Response
    }

    debug(`Se encontró el producto con el ID: ${id}`);
    res.status(200).json(products);
});

// Endpoint POST: Crea un nuevo producto
app.post('/products', (req: Request, res: Response) => {
    const { name, price, stock, is_active } = req.body; // Extraemos los datos del cuerpo de la petición

    // Validamos que todos los campos requeridos estén presentes
    if (!name || !price || stock === undefined || is_active === undefined) {
        debug('Faltan rellenar campos obligatorios!');
        res.status(400).json();
        return;
    }

    // Creamos un nuevo producto con los datos proporcionados
    const newProduct = {
        id: uuidv4(), // Generamos un ID único
        name,
        price,
        stock,
        is_active,
        created_at: new Date(),
        updated_at: new Date(),
    };

    // Añadimos el nuevo producto al array de productos
    products.push(newProduct);

    // Devolvemos el producto
    debug('Producto creado!');
    res.status(201).json(newProduct);
});

// Endpoint PATCH: Actualizamos un producto existente utilizando su ID
app.patch('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params; // Obtenemos el ID del producto de los parámetros de la URL
    const updates = req.body; // Obtenemos los campos a actualizar del cuerpo de la petición

    // Buscamos el ID del producto en el array
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
        // Si no se encuentra el producto, devolvemos un error 404
        debug(`No se encontró el producto con el ID: ${id}`);
        res.status(404).json();
        return;
    }

    // Actualizamos los campos del producto con los valores proporcionados
    products[productIndex] = {
        ...products[productIndex],
        ...updates,
        updated_at: new Date(), // Actualizamos la fecha de actualización
    };

    // Devolvemos el producto actualizado
    debug(`Se actualizo el producto con el ID: id`);
    res.status(200).json(products[productIndex]);
});

// Endpoint DELETE /products/:id: Elimina un producto por su ID
app.delete('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params; // Obtenemos el ID del producto de los parámetros de la URL

    // Filtramos el array de productos para eliminar el producto con el ID dado
    const initialLength = products.length;
    products = products.filter((p) => p.id !== id);

    if (products.length === initialLength) {
        // Si la longitud del array no cambió, significa que el producto no existía
        debug(`No existe el producto con el ID: ${id}`);
        res.status(404).json();
        return;
    }

    // Devolvemos un mensaje de éxito
    debug('Producto eliminado satisfactoriamente');
    res.status(200).json();
});

// Iniciamos el servidor en el puerto 3000 o en el tengamos en el ENV
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    debug(`Servidor iniciado en http://localhost:${PORT}`);
});
