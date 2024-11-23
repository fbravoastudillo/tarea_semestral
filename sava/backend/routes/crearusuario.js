const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CrearUsuario = require('../models/CrearUsuario');
const { isValidObjectId } = mongoose;

router.post('/', async (req, res) => {
  const { correo, nombre, cargo, area, perfil } = req.body;
  try {
    const newUser = new CrearUsuario({
      correo,
      nombre,
      cargo,
      area,
      perfil,
      tickets: 0
    });
    //Guardado del Crear Usuario en la base de datos
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear el usuario: ' + err.message });
  }
});

// Ruta para obtener todos los usuarios
router.get('/funcionarios', async (req, res) => {
  try {
    const usuarios = await CrearUsuario.find();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los usuarios: ' + err.message });
  }
});


// Editar un usuario por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, email, contraseña, area, perfil, tickets } = req.body;

  // Validar ID de usuario
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: 'ID de usuario no válido' });
  }

  try {
    // Construir objeto de actualización solo con campos proporcionados
    const updates = {};
    if (nombre) updates.nombre = nombre;
    if (email) updates.email = email;
    if (contraseña) updates.contraseña = contraseña;
    if (area) updates.area = area;
    if (perfil) updates.perfil = perfil;
    if (typeof tickets === 'number' && tickets >= 0) updates.tickets = tickets;

    const usuarioActualizado = await CrearUsuario.findByIdAndUpdate(id, updates, {
      new: true, // Retorna el documento actualizado
      runValidators: true, // Valida los datos antes de guardar
    });

    if (!usuarioActualizado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario actualizado exitosamente', usuario: usuarioActualizado });
  } catch (error) {
    console.error('Error al actualizar usuario:', error.message);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});
// Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  // Validar ID de usuario
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: 'ID de usuario no válido' });
  }

  try {
    const usuarioEliminado = await CrearUsuario.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error.message);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});
module.exports = router;