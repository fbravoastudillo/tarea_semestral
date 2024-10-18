function Tickets() {
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Gestión de Tickets</h1>
        <div className="bg-white shadow-md rounded p-6">
          <div className="flex justify-between mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
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
              <tr>
                <td className="border px-4 py-2">TIPO 1</td>
                <td className="border px-4 py-2">Almuerzo + Bebida</td>
                <td className="border px-4 py-2">Para Funcionario</td>
                <td className="border px-4 py-2">$0</td>
                <td className="border px-4 py-2">
                  <button className="text-blue-600 hover:underline mr-2">Editar</button> / 
                  <button className="text-red-600 hover:underline ml-2">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center" colSpan="5">No hay más tickets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Tickets;