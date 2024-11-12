<<<<<<< HEAD
import { useState } from 'react';

function Tickets() {
  const [tickets, setTickets] = useState([
    { nombre: 'TIPO 1', contenido: 'Almuerzo + Bebida', detalles: 'Para Funcionario', precio: '$0' }
  ]);

  const handleAddTicket = () => {
    const newTicket = { nombre: 'TIPO 2', contenido: 'Cena + Bebida', detalles: 'Para Invitado', precio: '$10' };
    setTickets([...tickets, newTicket]);
  };
=======
import { useState, useEffect } from 'react';
import axios from 'axios';

function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const obtenerTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5101/api/tickets/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de los tickets:', error);
      }
    };

    obtenerTickets();
  }, []);
>>>>>>> 7809ac050fbcd1fc9b3b8f859a4ae763dd83527f

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Tickets</h1>
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex justify-between mb-4">
<<<<<<< HEAD
          <button onClick={handleAddTicket} id="agregar" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
=======
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
>>>>>>> 7809ac050fbcd1fc9b3b8f859a4ae763dd83527f
            Crear Ticket
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            Exportar
          </button>
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
<<<<<<< HEAD
          <tr className="bg-blue-500 font-extrabold text-white text-xl">
          <th className="border px-4 py-2">Nombre</th>
=======
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Nombre</th>
>>>>>>> 7809ac050fbcd1fc9b3b8f859a4ae763dd83527f
              <th className="border px-4 py-2">Contenido</th>
              <th className="border px-4 py-2">Detalles</th>
              <th className="border px-4 py-2">Precio</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{ticket.nombre}</td>
                <td className="border px-4 py-2">{ticket.contenido}</td>
                <td className="border px-4 py-2">{ticket.detalles}</td>
                <td className="border px-4 py-2">{ticket.precio}</td>
                <td className="border px-4 py-2">Acciones</td>
              </tr>
            ))}
=======
            {tickets.length > 0 ? (
              tickets.map((ticket, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{ticket.nombre}</td>
                  <td className="border px-4 py-2">{ticket.contenido}</td>
                  <td className="border px-4 py-2">{ticket.detalles}</td>
                  <td className="border px-4 py-2">${ticket.precio}</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-600 hover:underline mr-2">Editar</button> / 
                    <button className="text-red-600 hover:underline ml-2">Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-2 text-center" colSpan="5">No hay más tickets</td>
              </tr>
            )}
>>>>>>> 7809ac050fbcd1fc9b3b8f859a4ae763dd83527f
          </tbody>
        </table>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Tickets;
=======
export default Tickets;
>>>>>>> 7809ac050fbcd1fc9b3b8f859a4ae763dd83527f
