import axios from 'axios';

const API_URL = 'http://localhost:5101'; // Ajusta esto si tu backend tiene otra URL

// Función para login de usuario
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error en el login:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Función para registrar un usuario
export const registerUser = async (nombre, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/registro`, { nombre, email, password });
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
  }
};

// Función para obtener usuarios (ejemplo adicional)
export const getUsuarios = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/usuarios`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

// Función para obtener tickets (ejemplo adicional)
export const getTickets = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/tickets`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener tickets:', error);
    throw error;
  }
};

// Función para crear un usuario
export const createUser = async (correo, nombre, cargo, area, perfil) => {
  try {
    const response = await axios.post(`${API_URL}/api/crearusuario`, { correo, nombre, cargo, area, perfil });
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
  }
};