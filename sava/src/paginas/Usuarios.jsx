import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [editUsuario, setEditUsuario] = useState(null);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:5101/api/crearusuario/funcionarios');
      if (!response.ok) throw new Error('Error al obtener los usuarios');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      const response = await fetch(`http://localhost:5101/api/crearusuario/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar el usuario');
      setUsuarios(usuarios.filter(usuario => usuario._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUsuario({ ...editUsuario, [name]: value });
  };

  const actualizarUsuario = async (id) => {
    try {
      const response = await fetch(`http://localhost:5101/api/crearusuario/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editUsuario),
      });
      if (!response.ok) throw new Error('Error al actualizar el usuario');
      const updatedUsuario = await response.json();
      setUsuarios(usuarios.map(usuario => (usuario._id === id ? updatedUsuario.usuario : usuario)));
      setEditUsuario(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex justify-between mb-4">
          <Link to="/crear-usuario" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
            Crear Usuario
          </Link>
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
                  <td className="border px-4 py-2 flex justify-center space-x-2">
                    <button
                      onClick={() => setEditUsuario(usuario)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarUsuario(usuario._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border px-4 py-2 text-center">No hay datos de usuarios disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
        {editUsuario && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Editar Usuario</h2>
            <input
              type="text"
              name="nombre"
              value={editUsuario.nombre}
              onChange={handleEditChange}
              className="border px-2 py-1 mr-2"
            />
            <input
              type="text"
              name="correo"
              value={editUsuario.correo}
              onChange={handleEditChange}
              className="border px-2 py-1 mr-2"
            />
            <input
              type="text"
              name="area"
              value={editUsuario.area}
              onChange={handleEditChange}
              className="border px-2 py-1 mr-2"
            />
            <input
              type="text"
              name="perfil"
              value={editUsuario.perfil}
              onChange={handleEditChange}
              className="border px-2 py-1 mr-2"
            />
            
            <button
              onClick={() => actualizarUsuario(editUsuario._id)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
            >
              Guardar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Usuarios;