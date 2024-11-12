const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener tickets' });
  }
});

// Crear un nuevo ticket
router.post('/', async (req, res) => {
  try {
    const nuevoTicket = new Ticket(req.body);
    await nuevoTicket.save();
    res.status(201).json(nuevoTicket);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear ticket' });
  }
});

module.exports = router;
