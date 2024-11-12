import { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx'; // Importamos la librería xlsx

function Reporte() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const obtenerTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5101/api/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error al obtener los tickets:', error);
      }
    };

    obtenerTickets();
  }, []);

  // Función para exportar los tickets a un archivo .xlsx
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(
      tickets.map(ticket => ({
        'ID': ticket._id,
        'Nombre': ticket.nombre,
        'Contenido': ticket.contenido,
        'Detalles': ticket.detalles,
        'Precio': ticket.precio,
        'Total': ticket.precio*1.19
      }))
    );

    XLSX.utils.book_append_sheet(wb, ws, 'Tickets');
    XLSX.writeFile(wb, 'tickets.xlsx');
  };

  
  
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Reporte de Tickets</h1>
      <div className="bg-white shadow-md rounded p-6">
        
        {/* Botones de exportar e imprimir */}
        <div className="text-right mb-4">
          <button 
            onClick={exportToExcel} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 mr-4"
          >
            Exportar
          </button>

          
        </div>

        {/* Tabla de Reportes */}
        <table id="reporte-table" className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-500 font-extrabold text-white text-xl">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Contenido</th>
              <th className="border px-4 py-2">Detalles</th>
              <th className="border px-4 py-2">Precio</th>
              <th className="border px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length > 0 ? (
              tickets.map((ticket, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{ticket._id}</td>
                  <td className="border px-4 py-2">{ticket.nombre}</td>
                  <td className="border px-4 py-2">{ticket.contenido}</td>
                  <td className="border px-4 py-2">{ticket.detalles}</td>
                  <td className="border px-4 py-2">${ticket.precio}</td>
                  <td className="border px-4 py-2">${Math.round(ticket.precio * 1.19)}</td>

                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="border px-4 py-2 text-center">No hay tickets disponibles</td>
              </tr>
            )}
            {/* Total de todos los tickets */}
            <tr>
              <td className="border px-4 py-2 text-right font-bold" colSpan="5">Total</td>
              <td className="border px-4 py-2">
  ${Math.round(tickets.reduce((acc, ticket) => acc + parseFloat(ticket.precio*1.19 || 0), 0))}
</td>

            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Reporte;
