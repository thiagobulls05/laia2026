import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Inicio } from './pages/Inicio';
import { Aeropuerto } from './pages/Aeropuerto'; 
import { Equipaje } from './pages/Equipaje';
import { Hotel } from './pages/Hotel';
import { Bolonia } from './pages/Bolonia';


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

          <Route path="/hotel" element={
            <ProtectedRoute path="hotel">
              <Hotel />
            </ProtectedRoute>
          } />
          
          <Route path="/bolonia" element={
            <ProtectedRoute path="bolonia">
              <Bolonia />
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