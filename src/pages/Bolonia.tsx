import { Link, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { TarjetaActividad } from '../components/TarjetaActividad';
import { ACTIVITIES, isActivityCompleted, areAllActivitiesCompleted } from '../utils/gameUtils'
import imagenSecretos from '../assets/bolonia.jpg';
import imagenTorre from '../assets/torre.jpg';
import imagenCena from '../assets/comida.jpg';
import imagenGaleria from '../assets/galeria.jpg';

export const Bolonia = () => {
  const { gameState, updateStage } = useGame();
  const navigate = useNavigate();

  // Definimos la lista de actividades principales usando tu objeto ACTIVITIES
  const actividadesPrincipales = [
    { id: ACTIVITIES.SECRETOS, titulo: 'Los siete secretos de Bolonia', imagen: imagenSecretos },
    { id: ACTIVITIES.VISTAS, titulo: 'Vistas en las alturas', imagen: imagenTorre },
    { id: ACTIVITIES.CENA, titulo: 'Restaurantes', imagen: imagenCena },
    { id: ACTIVITIES.GALERIA, titulo: 'Galería de recuerdos', imagen: imagenGaleria },
  ];

  // Usamos tu función de utils para saber si todas están completas
  const todasCompletadas = areAllActivitiesCompleted(
    gameState.fotos, 
    actividadesPrincipales.map(a => a.id)
  );

  const handleRevelar = () => {
    // Solo actualizamos si estamos estrictamente en 'bolonia'
    if (gameState.gameStage === 'bolonia') {
      updateStage('final');
    }
    
    // Navegamos siempre, así si el usuario ya había revelado 
    // la pista anteriormente.
    navigate('/final');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-black mb-4 text-center">Exploración por Bolonia</h1>
      <p className="text-gray-600 mb-6 text-justify">
        A partir de aquí empieza la exploración de Bolonia. Conforme vayas avanzando, tus recuerdos se irán guardando en la galería. 
        Cuando se completen todas las actividades, se revelará la sorpresa final.
      </p>

      <div className="grid grid-cols-2 gap-4 my-8">
        {actividadesPrincipales.map(act => (
          <TarjetaActividad 
            key={act.id}
            {...act}
            completada={isActivityCompleted(gameState.fotos, act.id)}
            onClick={() => navigate(`/bolonia/${act.id}`)}
          />
        ))}
      </div>
      
      <button
        onClick={handleRevelar}
        disabled={!todasCompletadas}
        className={`
          w-full flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 mx-auto text-center
          ${todasCompletadas 
            ? 'bg-rose-600 hover:bg-rose-700 text-white hover:scale-105 active:scale-95 cursor-pointer' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-75'
          }
        `}
      >
        {!todasCompletadas && <span>🔒</span>}
        <span>{todasCompletadas ? 'Finalizar Aventura' : 'Esperando completar aventura...'}</span>
      </button>

      <div className="mt-12 text-center">
        <Link 
          to="/hotel" 
          className="inline-flex items-center text-azul-oscuro font-medium hover:text-azul-medio transition-all group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Volver la pista anterior
        </Link>
      </div>
    </div>
  );
};