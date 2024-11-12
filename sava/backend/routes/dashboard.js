const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // Importa tu modelo de usuario
const Ticket = require('../models/Ticket');   // Importa tu modelo de ticket

// Endpoint para obtener los datos del dashboard
router.get('/', async (req, res) => {
  try {
    const totalUsuarios = await Usuario.countDocuments();
    const ticketsPendientes = await Ticket.countDocuments({ estado: 'pendiente' });
    const reportesGenerados = 8; 
    const actividadReciente = [
      { mensaje: 'Usuario Juan Pérez usó un nuevo ticket.' },
      { mensaje: 'Se generó un reporte de ventas para el mes de octubre.' },
      { mensaje: 'Usuario Marita Alba actualizó su perfil.' }
    ];

    res.json({
      totalUsuarios,
      ticketsPendientes,
      reportesGenerados,
      actividadReciente
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener datos del dashboard', error: error.message });
  }
});

module.exports = router;
