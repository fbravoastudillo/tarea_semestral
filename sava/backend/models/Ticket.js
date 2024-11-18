const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  nombre: String,
  contenido: String,
  detalles: String,
  precio: String
});

// Define el modelo solo si no ha sido definido previamente
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
