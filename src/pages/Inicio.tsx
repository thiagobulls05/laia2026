import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Link, useNavigate } from 'react-router-dom';
import { Timer } from '../components/Timer';
import inicioImg from '../assets/inicio.png';

export const Inicio = () => {
  const { gameState, updateStage } = useGame();
  const navigate = useNavigate();
  const [esHoraDeRevelar, setEsHoraDeRevelar] = useState(
    gameState.gameStage !== 'inicio' 
  );

  const handleRevelar = () => {
    // Solo actualizamos si estamos estrictamente en 'inicio'
    if (gameState.gameStage === 'inicio') {
      updateStage('aeropuerto');
    }
    
    // Navegamos siempre, así si el usuario ya había revelado 
    // la pista anteriormente.
    navigate('/aeropuerto');
  };

  return (
    <div className="p-6 text-center flex flex-col items-center max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-azul-oscuro mb-6">¡Feliz Cumpleaños Laia! 🎂</h1>
      
      <img 
        src={inicioImg} 
        alt="Inicio aventura" 
        className="w-64 h-auto rounded-lg shadow-md mb-8" 
      />

      <p className="text-justify text-gray-800 mb-8 leading-relaxed">
        Te espera una actividad especial para los días 14 y 15 de agosto, que va ligada a esta aplicación. 
        En cualquier momento podrás acceder a la app para ver la evolución de la aventura y las acciones 
        que tienes que realizar. ¡Mucha suerte, Gordita!
      </p>

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
      <Link 
        to="/equipaje" 
        className="mt-8 text-azul-oscuro font-medium flex items-center gap-2 hover:text-azul-medio transition-all group"
      >
        Ver equipaje necesario
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
};