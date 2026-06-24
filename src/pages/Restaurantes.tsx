import { Link } from 'react-router-dom';
import { TarjetaReserva } from '../components/TarjetaReserva';
import { Ubicacion } from '../components/Ubicacion';
import { TarjetaRecomendacion } from '../components/TarjetaRecomendacion';
import { ACTIVITIES } from '../utils/gameUtils'
import { useGame } from '../context/GameContext';
import { GestorFoto } from '../components/GestorFoto';

export const Restaurantes = () => {
  const { gameState, savePhoto } = useGame();
  
  return (
    <div className="main-div">
      <h1 className="main-header">Restaurantes</h1>

      <p className="paragraph">
        Esta aventura incluye una cena romántica para dos en uno de los mejores restaurantes de la ciudad: Osteria da Fortunata. 
        Asegúrate de estar puntual en el punto de encuentro. En esta pagina tambien se muestran
        recomendaciones de otros restaurantes que podemos ir para comer. 
      </p>

      <TarjetaReserva 
        lugar="Osteria da Fortunata"
        fecha="14 de Agosto, 2026"
        hora="21:00"
        descripcion="Cena romántica en Bolonia"
      />

      <Ubicacion 
        titulo="Osteria da Fortunata"
        urlGoogleMaps="https://maps.app.goo.gl/raRsYNvkxAXTYjow8"
        srcEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.9805326214055!2d11.3424431122789!3d44.49506569745526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd5cf80391aab%3A0xe52edf8a1604723e!2sOsteria%20Da%20Fortunata%20-%20Bologna!5e0!3m2!1ses!2ses!4v1782306395368!5m2!1ses!2ses"
      />

      <GestorFoto 
        fotoUrl={gameState.fotos[ACTIVITIES.CENA]} // Obtenemos la foto del estado
        onFotoSubida={(base64) => savePhoto(ACTIVITIES.CENA, base64)}
        pieDeFoto="¡Cena romántica disfrutada!"
      />

      <div className="w-full mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Otros restaurantes</h3>
        <div className="grid grid-cols-1 gap-4">
          <TarjetaRecomendacion 
            nombre="Osteria dell'Orsa" 
            urlMaps="https://maps.app.goo.gl/P1C3bMzKtqXuAHSC9" 
          />
          <TarjetaRecomendacion 
            nombre="Sfoglia Rina" 
            urlMaps="https://maps.app.goo.gl/EVVyyt5s9YjqyUNG8" 
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link 
          to="/bolonia" 
          className="inline-flex items-center text-azul-oscuro font-medium hover:text-azul-medio transition-all group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Volver al menú principal
        </Link>
      </div>
    </div>
  );
};