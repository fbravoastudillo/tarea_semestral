import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Layout() {
  const navigate = useNavigate();
  const [nombreUsuario, setNombreUsuario] = useState('');

  useEffect(() => {
    const nombre = localStorage.getItem('nombreUsuario');
    if (nombre) {
      setNombreUsuario(nombre);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nombreUsuario');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="text-center p-4 text-2xl font-semibold">
          SAVA
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  isActive ? "block py-2 px-4 bg-yellow-500 text-white" : "block py-2 px-4 hover:bg-gray-700"
                }>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/usuarios" 
                className={({ isActive }) => 
                  isActive ? "block py-2 px-4 bg-yellow-500 text-white" : "block py-2 px-4 hover:bg-gray-700"
                }>
                Usuarios
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tickets" 
                className={({ isActive }) => 
                  isActive ? "block py-2 px-4 bg-yellow-500 text-white" : "block py-2 px-4 hover:bg-gray-700"
                }>
                Tickets
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/reportes" 
                className={({ isActive }) => 
                  isActive ? "block py-2 px-4 bg-yellow-500 text-white" : "block py-2 px-4 hover:bg-gray-700"
                }>
                Reportes
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-grow flex flex-col">
        <header className="bg-white shadow p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">SAVA</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Usuario: {nombreUsuario}</span>
              <button 
                onClick={handleLogout} 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
        <main className="flex-grow p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
