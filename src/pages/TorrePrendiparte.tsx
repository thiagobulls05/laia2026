import { Link } from 'react-router-dom';
import { Ubicacion } from '../components/Ubicacion';
import { TarjetaReserva } from '../components/TarjetaReserva';


export const TorrePrendiparte = () => {
  
  return (
    <div className="p-6 text-center flex flex-col items-center max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-azul-oscuro mb-6">Torre Prendiparte</h1>

      <p className="text-gray-600 mb-6 text-justify">
        La Torre Prendiparte es actualmente la torre más alta y accesible de Bolonia.
        Hemos reservado una experiencia exclusiva para subir a lo más alto de la ciudad y 
        contemplarlo todo. Asegúrate de estar puntual en el punto de encuentro.
      </p>

      <TarjetaReserva 
        lugar="Torre Prendiparte"
        fecha="14 de Agosto, 2026"
        hora="19:00"
        descripcion="Acceso prioritario a la torre."
      />

      <Ubicacion 
        titulo="Torre Prendiparte de Bolonia"
        urlGoogleMaps="https://maps.app.goo.gl/3e59QEUA1RxsBXTw9"
        srcEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.937282297891!2d11.342114662278927!3d44.49595189739692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4bdfb46f005%3A0xb4a05a3bcaafbd5a!2sTorre%20Prendiparte!5e0!3m2!1ses!2ses!4v1782304984885!5m2!1ses!2ses"
      />

      <div className="mt-12 text-center">
        <Link 
          to="/bolonia/torres" 
          className="inline-flex items-center text-azul-oscuro font-medium hover:text-azul-medio transition-all group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Volver al menú anterior
        </Link>
      </div>
    </div>
  );
};