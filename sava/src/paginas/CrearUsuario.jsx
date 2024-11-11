import React, { useState } from 'react';

export default function CrearUsuario() {
  console.log('Componente CrearUsuario renderizado');
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [correo, setCorreo] = useState('');
  const [area, setArea] = useState('');
  const [perfil, setPerfil] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Usuario creado:', { nombre, cargo, correo, area, perfil });
    setNombre('');
    setCargo('');
    setCorreo('');
    setArea('');
    setPerfil('');

    // Show confirmation message
    setMensaje('Usuario creado correctamente');
  };

  return (
    <section className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400'>
      <form onSubmit={handleSubmit}>
        <h2>Creación de usuarios</h2>
        <div>
          <label htmlFor="nombre">
            Nombre:
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="cargo">
            Cargo:
            <input
              type="text"
              id="cargo"
              name="cargo"
              required
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="correo">
            Correo:
            <input
              type="text"
              id="correo"
              name="correo"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="area">
            Area:
            <input
              type="text"
              id="area"
              name="area"
              required
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="perfil">
            Perfil:
            <input
              type="text"
              id="perfil"
              name="perfil"
              required
              value={perfil}
              onChange={(e) => setPerfil(e.target.value)}
            />
          </label>
        </div>
        <div className='Boton'>
          <button type="submit" className="crear">
            Crear Usuario
          </button>
        </div>
        {mensaje && <div className="mensaje">{mensaje}</div>}
      </form>
    </section>
  );
}