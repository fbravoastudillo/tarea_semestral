const express = require('express');
const router = express.Router();

// Datos de ejemplo, en producción deberías obtenerlos de una base de datos
const ventas = [
  { id: 'TIPO 1', contenido: 'Almuerzo + Bebida', detalles: 'Para Funcionario', precio: 0, total: 0 },
  { id: 'TIPO 2', contenido: 'Almuerzo + Bebida', detalles: 'Para Funcionario', precio: 0, total: 0 },
];

// Endpoint para obtener el reporte de ventas
router.get('/ventas', (req, res) => {
  try {
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el reporte de ventas', error: error.message });
  }
});

module.exports = router;
