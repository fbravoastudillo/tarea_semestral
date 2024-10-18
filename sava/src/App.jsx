// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import PagLogin from './paginas/Login';
import PagRegistro from './paginas/Registro';
import Dashboard from './paginas/Dashboard';
import Reporte from './paginas/Reporte';
import Usuarios from './paginas/Usuarios';  
import Tickets from './paginas/Tickets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas para login y registro */}
        <Route path="/login" element={<PagLogin />} />
        <Route path="/registro" element={<PagRegistro />} />

        {/* Rutas protegidas con layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tareas" element={<h1>Listado de Tareas</h1>} />
          <Route path="reportes" element={<Reporte />} />
          <Route path="usuarios" element={<Usuarios />} /> 
          <Route path="tickets" element={<Tickets />} /> 
          <Route path="ajustes" element={<h1>Ajustes del Sistema</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
