import { useState } from 'react';

function Tickets() {
  const [tickets, setTickets] = useState([
    { nombre: 'TIPO 1', contenido: 'Almuerzo + Bebida', detalles: 'Para Funcionario', precio: '$0' }
  ]);

  const handleAddTicket = () => {
    const newTicket = { nombre: 'TIPO 2', contenido: 'Cena + Bebida', detalles: 'Para Invitado', precio: '$10' };
    setTickets([...tickets, newTicket]);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Tickets</h1>
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex justify-between mb-4">
          <button onClick={handleAddTicket} id="agregar" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
            Crear Ticket
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            Exportar
          </button>
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Contenido</th>
              <th className="border px-4 py-2">Detalles</th>
              <th className="border px-4 py-2">Precio</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{ticket.nombre}</td>
                <td className="border px-4 py-2">{ticket.contenido}</td>
                <td className="border px-4 py-2">{ticket.detalles}</td>
                <td className="border px-4 py-2">{ticket.precio}</td>
                <td className="border px-4 py-2">Acciones</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tickets;