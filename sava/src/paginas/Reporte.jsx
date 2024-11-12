import { useState, useEffect } from 'react';
import axios from 'axios';

function Reporte() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const obtenerVentas = async () => {
      try {
        const response = await axios.get('http://localhost:5101/api/reportes/ventas');
        setVentas(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del reporte:', error);
      }
    };

    obtenerVentas();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Reporte de Ventas</h1>
      <div className="bg-white shadow-md rounded p-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Venta</th>
              <th className="border px-4 py-2">Contenido</th>
              <th className="border px-4 py-2">Detalles</th>
              <th className="border px-4 py-2">Precio</th>
              <th className="border px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {ventas.length > 0 ? (
              ventas.map((venta, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{venta.id}</td>
                  <td className="border px-4 py-2">{venta.contenido}</td>
                  <td className="border px-4 py-2">{venta.detalles}</td>
                  <td className="border px-4 py-2">${venta.precio}</td>
                  <td className="border px-4 py-2">${venta.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border px-4 py-2 text-center">No hay datos de ventas disponibles</td>
              </tr>
            )}
            <tr>
              <td className="border px-4 py-2 text-right font-bold" colSpan="4">Total</td>
              <td className="border px-4 py-2">${ventas.reduce((acc, venta) => acc + venta.total, 0)}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 text-right">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            Exportar
          </button>
        </div>
      </div>
    </div>
  );
}



export default Reporte;
