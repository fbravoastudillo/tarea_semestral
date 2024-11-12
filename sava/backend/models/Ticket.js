const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  contenido: { type: String, required: true },
  detalles: { type: String, required: true },
  precio: { type: Number, required: true },
});

module.exports = mongoose.model('Ticket', ticketSchema);
