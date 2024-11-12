import { useState, useEffect } from 'react';
import axios from 'axios';

function Usuarios() {
<<<<<<< HEAD
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>
        <div className="bg-white shadow-md rounded p-6">
          <div className="flex justify-between mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
              Crear Usuario
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
              Exportar
            </button>
          </div>
          <table className="w-full table-auto border-collapse">
            <thead>
            <tr className="bg-blue-500 font-extrabold text-white text-xl">
            <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Área</th>
                <th className="border px-4 py-2">Perfil</th>
                <th className="border px-4 py-2">Tickets</th>
                <th className="border px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Marita Alba</td>
                <td className="border px-4 py-2">Finanzas</td>
                <td className="border px-4 py-2">Funcionario</td>
                <td className="border px-4 py-2">0</td>
                <td className="border px-4 py-2">
                  <button className="text-blue-600 hover:underline mr-2">Editar</button> / 
                  <button className="text-red-600 hover:underline ml-2">Eliminar</button>
                </td>
              </tr>
=======
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:5101/api/usuarios/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex justify-between mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
            Crear Usuario
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            Exportar
          </button>
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Área</th>
              <th className="border px-4 py-2">Perfil</th>
              <th className="border px-4 py-2">Tickets</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{usuario.nombre}</td>
                  <td className="border px-4 py-2">{usuario.area}</td>
                  <td className="border px-4 py-2">{usuario.perfil}</td>
                  <td className="border px-4 py-2">{usuario.tickets}</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-600 hover:underline mr-2">Editar</button> / 
                    <button className="text-red-600 hover:underline ml-2">Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
>>>>>>> 7809ac050fbcd1fc9b3b8f859a4ae763dd83527f
              <tr>
                <td className="border px-4 py-2 text-center" colSpan="5">No hay más usuarios</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Usuarios;
