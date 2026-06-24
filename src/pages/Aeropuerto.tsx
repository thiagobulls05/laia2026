import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Link, useNavigate } from 'react-router-dom';
import { Timer } from '../components/Timer';
import { Ubicacion } from '../components/Ubicacion';


export const Aeropuerto = () => {
  const { gameState, updateStage } = useGame();
  const navigate = useNavigate();
  const [esHoraDeRevelar, setEsHoraDeRevelar] = useState(
    gameState.gameStage !== 'aeropuerto' 
  );

  const handleRevelar = () => {
    // Solo actualizamos si estamos estrictamente en 'aeropuerto'
    if (gameState.gameStage === 'aeropuerto') {
      updateStage('hotel');
    }
    
    // Navegamos siempre, así si el usuario ya había revelado 
    // la pista anteriormente.
    navigate('/hotel');
  };

  return (
    <div className="main-div">
      <h1 className="main-header">Arepuerto de Barcelona ✈️</h1>

      <p className="paragraph">
        La aventura sigue en otro país. Abróchate los cinturones porque hemos de coger un vuelo. 
        ¡Próximo destino, el aeropuerto de Barcelona! Dirígete a la ubicación adjuntada lo antes posible.
      </p>

      <Ubicacion 
        titulo="Encuentro en el Aeropuerto"
        urlGoogleMaps="https://maps.app.goo.gl/xjRBLuP6aHYsMu91A"
        srcEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47962.00134127855!2d2.035096350274983!3d41.29526342344005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49e64847c8ea5%3A0xf32be942fb6f9bd7!2sAeropuerto%20Josep%20Tarradellas%20Barcelona-El%20Prat!5e0!3m2!1ses!2ses!4v1781957821274!5m2!1ses!2ses"
      />

      <Timer 
        fechaObjetivo={new Date('2026-06-20T14:02:00')} 
        onTimeUp={() => setEsHoraDeRevelar(true)} 
      />
      <button
        onClick={handleRevelar}
        disabled={!esHoraDeRevelar} 
        className={`
          flex items-center justify-center gap-2 font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300
          ${esHoraDeRevelar 
            ? 'bg-rose-600 hover:bg-rose-700 text-white hover:scale-110 active:scale-95 cursor-pointer' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-75'
          }
        `}
      >
        {!esHoraDeRevelar && <span>🔒</span>}
        {esHoraDeRevelar ? 'Siguiente Pista' : 'Esperando pista...'}
      </button>
      <div className="mt-12 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center text-azul-oscuro font-medium hover:text-azul-medio transition-all group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};