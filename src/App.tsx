import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Inicio } from './pages/Inicio';
import { Aeropuerto } from './pages/Aeropuerto'; 
import { Equipaje } from './pages/Equipaje';
import { Hotel } from './pages/Hotel';
import { Bolonia } from './pages/Bolonia';
import { Final } from './pages/Final';
import { Secretos } from './pages/Secretos';
import { Torres } from './pages/Torres';
import { Restaurantes } from './pages/Restaurantes';
import { Galeria } from './pages/Galeria';
import { TorreReloj } from './pages/TorreReloj';
import { TorrePrendiparte } from './pages/TorrePrendiparte';


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

          <Route path="/bolonia/secretos" element={
            <ProtectedRoute path="bolonia/secretos">
              <Secretos />
            </ProtectedRoute>
          } />

          <Route path="/bolonia/torres" element={
            <ProtectedRoute path="bolonia/torres">
              <Torres />
            </ProtectedRoute>
          } />

          <Route path="/bolonia/restaurantes" element={
            <ProtectedRoute path="bolonia/restaurantes">
              <Restaurantes />
            </ProtectedRoute>
          } />

          <Route path="/bolonia/galeria" element={
            <ProtectedRoute path="bolonia/galeria">
              <Galeria />
            </ProtectedRoute>
          } />

          <Route path="/bolonia/torres/torre_reloj" element={
            <ProtectedRoute path="bolonia/torres/torre_reloj">
              <TorreReloj />
            </ProtectedRoute>
          } />

          <Route path="/bolonia/torres/torre_prendiparte" element={
            <ProtectedRoute path="bolonia/torres/torre_prendiparte">
              <TorrePrendiparte />
            </ProtectedRoute>
          } />

          <Route path="/final" element={
            <ProtectedRoute path="final">
              <Final />
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