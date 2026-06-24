import { Link } from 'react-router-dom';
import { Ubicacion } from '../../components/Ubicacion';
import { TarjetaReserva } from '../../components/TarjetaReserva';
import { GestorFoto } from '../../components/GestorFoto';
import { useGame } from '../../context/GameContext';
import { ACTIVITIES } from '../../utils/gameUtils'


export const TorreReloj = () => {
  const { gameState, savePhoto } = useGame();
  
  return (
    <div className="main-div">
      <h1 className="main-header">Torre del Reloj</h1>

      <p className="paragraph">
        La Torre del Reloj es uno de los puntos más emblemáticos de la ciudad. 
        Hemos reservado una experiencia exclusiva para subir a lo alto de la plaza y 
        contemplar el centro de Bolonia. Asegúrate de estar 
        puntual en el punto de encuentro.
      </p>

      <TarjetaReserva 
        lugar="Torre dell'Orologio"
        fecha="15 de Agosto, 2026"
        hora="11:40"
        descripcion="Acceso prioritario a la torre."
      />

      <Ubicacion 
        titulo="Torre del Reloj de Bolonia"
        urlGoogleMaps="https://maps.app.goo.gl/4QYaJP6cxfpjzn5BA"
        srcEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0467049818803!2d11.339646112278905!3d44.493709797544305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd56edba5fbe1%3A0xb3ff9e960ae6657b!2sTorre%20dell&#39;Orologio!5e0!3m2!1ses!2ses!4v1782305122736!5m2!1ses!2ses"
      />

      <GestorFoto 
        fotoUrl={gameState.fotos[ACTIVITIES.TORRE_RELOJ]} 
        onFotoSubida={(base64) => savePhoto(ACTIVITIES.TORRE_RELOJ, base64)}
        pieDeFoto="¡Vistas desde la torre del Reloj!"
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