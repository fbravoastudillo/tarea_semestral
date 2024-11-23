const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket'); // Importa el modelo de Ticket
const CrearUsuario = require('../models/CrearUsuario');

// Ruta para obtener todos los tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los tickets' });
  }
});

// Ruta para crear un nuevo ticket
router.post('/nuevo_ticket', async (req, res) => {
  try {
    const { nombre, contenido, detalles, precio, fecha } = req.body;

    // Buscar el usuario por nombre
    const usuario = await CrearUsuario.findOne({ nombre });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Crear el ticket asociado al usuario
    const newTicket = new Ticket({ nombre, contenido, detalles, precio, fecha, usuario: usuario._id });
    await newTicket.save();

    // Incrementar el número de tickets del usuario
    usuario.tickets += 1;
    await usuario.save();

    res.status(201).json(newTicket);
  } catch (error) {
    console.error('Error al crear el ticket:', error);
    res.status(500).json({ error: 'Error al crear el ticket' });
  }
});
// Ruta para eliminar un ticket
router.delete('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket no encontrado' });
    }
    res.status(200).json({ message: 'Ticket eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el ticket' });
  }
});

module.exports = router;