# Protocolo de API REST - Node/TS/Express

## Configuración inicial

1. Crea una carpeta e inicia un proyecto en **Node**: `npm init -y`
2. Instala **TypeScript** y los tipos de **Node**: `npm i -D  typescript @types/node`
3. Crea el fichero **_tsconfig.json_**: `npx tsc --init`
4. Crea el fichero de reglas **_eslintconfig_**: `npm init @eslint/config@latest`
5. Instala la librería **cross-env**: `npm i cross-env`
6. Instala **dotenv** para trabajar con el fichero **_.env_**
7. Añade los siguientes **scripts** en **_package.json_**:

   - "start": "node dist/index.js"
   - "start:dev": "cross-env NODE_ENV=dev DEBUG=demo\* node --watch --env-file=.env ./dist/index.js"
   - "build": "tsc -w"
   - "lint": "eslint . --ext .ts"

   Opcional: Puedes añadir esta configuración de **prettier**: `"prettier": {"singleQuote": true}`

8. Edita el **_tsconfig.json_** añadiendo lo siguiente:

   - "target": "ESNext"
   - "module": "ESNext"
   - "rootDir": "./src"
   - "moduleResolution": "node10"
   - "outDir": "./dist"

9. Instala **Express** junto con sus tipos: `npm i express`, `npm i -D @types/express`
10. Instala **debug** y sus tipos para los comentarios en la terminal del **servidor**: `npm i debug`, `npm i -D @types/debug`
11. Instala **morgan** y sus tipos para el control de los middleware: `npm i morgan`, `npm i -D @types/morgan`
12. Instala **cors** y sus tipos para otorgar un middleware **Connect/Express** que se utiliza para habilitar **CORS** y de esa manera evitar los conflictos de intercambio de información entre puertos diferentes: `npm i cors`, `npm i -D @types/cors`
13. Crea el repositorio de **Git** y realiza el **Initial Commit**
14. Coloca en la terminal `npm run build` para así inicializar tu terminal **build** y otorga la siguiente configuración: Color azul, logo de un reinicio y nombre: **build (tst)**
