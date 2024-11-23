// src/controladores/ticketController.js
import Ticket from '../models/Ticket.js';
import CrearUsuario from '../models/CrearUsuario.js';

export const createTicket = async (req, res) => {
  try {
    const { nombre, contenido, detalles, precio, fecha } = req.body;

    // Buscar el usuario por nombre
    const usuario = await CrearUsuario.findOne({ nombre });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Crear el ticket asociado al usuario
    const newTicket = new Ticket({ nombre, contenido, detalles, precio, fecha, usuario: usuario._id });
    await newTicket.save();

    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el ticket', error });
  }
};