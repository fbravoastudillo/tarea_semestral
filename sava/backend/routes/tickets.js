const express = require('express');
const router = express.Router();

// Datos de ejemplo, en producción deberías obtenerlos de una base de datos
const tickets = [
  { nombre: 'TIPO 1', contenido: 'Almuerzo + Bebida', detalles: 'Para Funcionario', precio: 0 },
  { nombre: 'TIPO 2', contenido: 'Cena + Bebida', detalles: 'Para Visitante', precio: 500 },
];

router.get('/tickets', (req, res) => {
  try {
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los tickets', error: error.message });
  }
});

module.exports = router;
