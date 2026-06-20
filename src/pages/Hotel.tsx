import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Link, useNavigate } from 'react-router-dom';
import { Timer } from '../components/Timer';
import { Ubicacion } from '../components/Ubicacion';
import { TarjetaVuelo } from '../components/TarjetaVuelo';


export const Hotel = () => {
  const { gameState, updateStage } = useGame();
  const navigate = useNavigate();
  const [esHoraDeRevelar, setEsHoraDeRevelar] = useState(
    gameState.gameStage !== 'hotel' 
  );

  const handleRevelar = () => {
    // Solo actualizamos si estamos estrictamente en 'hotel'
    if (gameState.gameStage === 'hotel') {
      updateStage('bolonia');
    }
    
    // Navegamos siempre, así si el usuario ya había revelado 
    // la pista anteriormente.
    navigate('/bolonia');
  };

  return (
    <div className="p-6 text-center flex flex-col items-center max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-azul-oscuro mb-6">🍝 ¡Bolonia! 🇮🇹</h1>

      <p className="text-justify text-gray-800 mb-8 leading-relaxed">
        ¡Nos vamos a Bolonia! Prepárate para disfrutar de la comida italiana y de una aventura en las calles de una de mis ciudades favoritas. 
        ¡Próximo destino, el hotel de Bolinia! Dirígete a la ubicación adjuntada lo antes posible.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Tu próximo vuelo</h2>
      
      <TarjetaVuelo 
        aerolinea="Ryanair"
        vuelo="FR2098"
        origen="BCN"
        destino="BLQ"
        horaSalida="08:55"
        horaLlegada="10:40"
      />

      <Ubicacion 
        titulo="Encuentro en el Hotel"
        urlGoogleMaps="https://maps.app.goo.gl/9HKuqukMrCeysVww8"
        srcEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.287811128495!2d11.338644041147003!3d44.50925789676472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd49d83775329%3A0x83ca14a41c9a989a!2sThe%20Social%20Hub%20Bologna!5e0!3m2!1ses!2ses!4v1781958946192!5m2!1ses!2ses"
      />

      <Timer 
        fechaObjetivo={new Date('2026-06-20T14:02:00')} 
        onTimeUp={() => setEsHoraDeRevelar(true)} 
      />
      {esHoraDeRevelar ? (
        <button 
          className="bg-accent hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={handleRevelar}
        >
          Revelar Pista
        </button>
      ) : (
        <p className="text-sm text-gray-500 italic">Cuando el contador llegue a 0, se mostrará la próxima pista.</p>
      )}
      <div className="mt-12 text-center">
        <Link 
          to="/aeropuerto" 
          className="inline-flex items-center text-azul-oscuro font-medium hover:text-azul-medio transition-all group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Volver la pista anterior
        </Link>
      </div>
    </div>
  );
};