const express = require('express');
const router = express.Router();

// Datos de ejemplo, en producción deberías obtenerlos de una base de datos
const usuarios = [
  { nombre: 'Marita Alba', area: 'Finanzas', perfil: 'Funcionario', tickets: 0 },
  { nombre: 'Juan Pérez', area: 'IT', perfil: 'Administrador', tickets: 3 },
  // Más datos de usuarios
];

// Endpoint para obtener la lista de usuarios
router.get('/usuarios', (req, res) => {
  try {
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la lista de usuarios', error: error.message });
  }
});

module.exports = router;
