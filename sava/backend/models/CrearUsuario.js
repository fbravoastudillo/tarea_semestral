const mongoose = require('mongoose');

const CrearUsuarioSchema = new mongoose.Schema({
  correo: { type: String, required: true },
  nombre: { type: String, required: true },
  cargo: { type: String, required: true },
  area: { type: String, required: true },
  perfil: { type: String, required: true },
  tickets: { type: Number, default: 0 } // Número de tickets emitidos
});

module.exports = mongoose.model('CrearUsuario', CrearUsuarioSchema);
