import express from 'express'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import usuarioRoutes from './routes/usuarioRoutes.js'
import propiedadesRoutes from './routes/propiedadesRoutes.js'
import appRoutes from './routes/appRoutes.js'
import apiRoutes from './routes/apiRoutes.js'
import db from './config/db.js'

// Crear la app
const app = express()

// Habilitar lectura de datos de formularios
app.use( express.urlencoded({extended: true}) )

// Habilitar Cookie parser
app.use(cookieParser())

// Habilitar CSRF
app.use(csrf({cookie: true}))

// Conexion a la base de datos
try {
    await db.authenticate();

    if (process.env.BD_SYNC === 'true') {
        await db.sync();
    }

    console.log('Conexión correcta a la base de datos');
} catch(error) {
    console.error('Error conectando con la base de datos');
    console.error(error);
    process.exit(1);
}

// Habilitar pug
app.set('view engine','pug')
app.set('views','./views')

// Carpe Publica
app.use( express.static('public') )

// Routing
app.use('/', appRoutes)
app.use('/auth', usuarioRoutes)
app.use('/', propiedadesRoutes)
app.use('/api', apiRoutes)

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});