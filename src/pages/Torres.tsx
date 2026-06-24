import { Link, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { TarjetaActividad } from '../components/TarjetaActividad';
import { ACTIVITIES, isActivityCompleted } from '../utils/gameUtils'
import imagenPrendiparte from '../assets/torre_prendiparte.jpg';
import imagenReloj from '../assets/torre_reloj.jpg';


export const Torres = () => {
  const { gameState } = useGame();
  const navigate = useNavigate();

  // Definimos la lista de excursiones usando objeto ACTIVITIES
  const excursiones = [
    { id: ACTIVITIES.TORRE_RELOJ, titulo: 'La Torre del reloj de Bolonia', imagen: imagenReloj },
    { id: ACTIVITIES.TORRE_PRENDIPARTE, titulo: 'La Torre Prendiparte', imagen: imagenPrendiparte },
  ];
  
  return (
    <div className="main-div">
      <h1 className="main-header">Vistas en las alturas</h1>

      <p className="paragraph">
        La aventura por Bolonia incluye dos excursiones por las alturas para que puedas ver toda la ciudad a tus pies. 
        Sube una foto de cada excursión para marcar como completada la actividad de las alturas.
      </p>

      <div className="grid grid-cols-2 gap-4 my-8">
        {excursiones.map(act => (
          <TarjetaActividad 
            key={act.id}
            {...act}
            completada={isActivityCompleted(gameState.fotos, act.id)}
            onClick={() => navigate(`/bolonia/torres/${act.id}`)}
          />
        ))}
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