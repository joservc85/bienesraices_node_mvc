import express from 'express'
import {inicio, categoria, noEncontrado, buscador} from '../controllers/appController.js'

const router = express.Router()

// PAgina de inicio
router.get('/', inicio)

// Categoria
router.get('/categorias/:id', categoria)

// PAgina 404
router.get('/404', noEncontrado)

// Busador
router.post('/buscador', buscador)

export default router;