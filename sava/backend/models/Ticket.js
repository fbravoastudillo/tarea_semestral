const mongoose = require('mongoose');

// models/Ticket.js
// Define el esquema de un ticket

const ticketSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  contenido: { type: String, required: true },
  detalles: { type: String, required: true },
  precio: { type: String, required: true },
  fecha: { type: String, required: true }
});

module.exports = mongoose.model('Ticket', ticketSchema);

module.exports = mongoose.model('Ticket', ticketSchema);