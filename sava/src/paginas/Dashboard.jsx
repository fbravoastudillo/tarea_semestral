import { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState({
    totalUsuarios: 0,
    ticketsPendientes: 0,
    reportesGenerados: 0,
    actividadReciente: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5101/api/dashboard');
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del dashboard:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-2">Total de Usuarios</h2>
          <p className="text-4xl font-semibold text-gray-800">{data.totalUsuarios}</p>
          <p className="text-sm text-gray-500">Usuarios registrados en el sistema</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-2">Tickets Pendientes</h2>
          <p className="text-4xl font-semibold text-gray-800">{data.ticketsPendientes}</p>
          <p className="text-sm text-gray-500">Tickets sin usar</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-2">Reportes Generados</h2>
          <p className="text-4xl font-semibold text-gray-800">{data.reportesGenerados}</p>
          <p className="text-sm text-gray-500">Últimos reportes generados</p>
        </div>
        <div className="bg-white shadow-md rounded p-6 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-bold mb-2">Actividad Reciente</h2>
          <ul className="text-gray-700">
            {data.actividadReciente.map((actividad, index) => (
              <li key={index}>• {actividad.mensaje}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
