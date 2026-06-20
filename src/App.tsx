import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Inicio } from './pages/Inicio';
import { Aeropuerto } from './pages/Aeropuerto'; 
import { Equipaje } from './pages/Equipaje';
import { Vuelo } from './pages/Vuelo';
import { BoloniaHome } from './pages/BoloniaHome';


function App() {
  return (
    <Router>
      <Layout >
        <Routes>
          {/* Pantallas públicas o de control de acceso */}
          <Route path="/" element={<Inicio />} />
          <Route path="/equipaje" element={<Equipaje />} />

          {/* Rutas protegidas */}
          <Route path="/aeropuerto" element={
            <ProtectedRoute path="aeropuerto">
              <Aeropuerto />
            </ProtectedRoute>
          } />

          <Route path="/vuelo" element={
            <ProtectedRoute path="vuelo">
              <Vuelo />
            </ProtectedRoute>
          } />
          
          <Route path="/bolonia-home" element={
            <ProtectedRoute path="bolonia-home">
              <BoloniaHome />
            </ProtectedRoute>
          } />
          
          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;