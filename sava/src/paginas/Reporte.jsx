
import { exportToExcel } from '../controladores/reportes';

function Reporte() {
  const tableData = [
    { venta: 'TIPO 1', contenido: 'Almuerzo + Bebida', detalles: 'Para Funcionario', precio: 0, total: 0 },
    { venta: 'TIPO 2', contenido: 'Almuerzo + Bebida', detalles: 'Para Funcionario', precio: 0, total: 0 },
    ...[...Array(15)].map((_, index) => ({
        venta: 12347 + index,
        contenido: `Almuerzo + Bebida ${String.fromCharCode(90 - index)}`,
        detalles: 'Para funcionario',
        precio: (index + 1) * 100,
        total: (index + 1) * 120
    }))
];

const handleExport = () => {
    exportToExcel(tableData, 'ReporteDeVentas');
};
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Reporte de Ventas</h1>
        <div className="bg-white shadow-md rounded p-6">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-500 font-extrabold text-white text-xl">
                <th className="border px-4 py-2">Venta</th>
                <th className="border px-4 py-2">Contenido</th>
                <th className="border px-4 py-2">Detalles</th>
                <th className="border px-4 py-2">Precio</th>
                <th className="border px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">TIPO 1</td>
                <td className="border px-4 py-2">Almuerzo + Bebida</td>
                <td className="border px-4 py-2">Para Funcionario</td>
                <td className="border px-4 py-2">$0</td>
                <td className="border px-4 py-2">$0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">TIPO 2</td>
                <td className="border px-4 py-2">Almuerzo + Bebida</td>
                <td className="border px-4 py-2">Para Funcionario</td>
                <td className="border px-4 py-2">$0</td>
                <td className="border px-4 py-2">$0</td>
              </tr>
              {[...Array(15)].map((_, index) => (
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
<<<<<<< HEAD
                <td className="border px-4 py-2 text-right font-bold" colSpan="4">Total</td>
                <td className="border px-4 py-2">$0</td>
              </tr>          
            </tbody>
          </table>
          <div className="mt-4 text-right">
            <button onClick={handleExport} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
              Exportar
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default Reporte;
=======
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
>>>>>>> 7809ac050fbcd1fc9b3b8f859a4ae763dd83527f
