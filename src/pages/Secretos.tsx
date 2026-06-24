import { Link, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { TarjetaActividad } from '../components/TarjetaActividad';
import { ACTIVITIES, isActivityCompleted } from '../utils/gameUtils'
import imagenVentana from '../assets/ventana.jpg';
import imagenNeptuno from '../assets/neptuno.jpg';
import imagenFlechas from '../assets/flechas.jpg';
import imagenVoltone from '../assets/voltone.jpg';
import imagenCanabis from '../assets/canabis.png';
import imagenSol from '../assets/sol.jpg';
import imagenDiablo from '../assets/diablo.jpg';

export const Secretos = () => {
  const { gameState } = useGame();
  const navigate = useNavigate();

  // Definimos la lista de excursiones usando objeto ACTIVITIES
  const secretos = [
    { id: ACTIVITIES.SECRETO(1), titulo: 'La Ventanilla de Via Piella', imagen: imagenVentana },
    { id: ACTIVITIES.SECRETO(2), titulo: 'El dedo de Neptuno', imagen: imagenNeptuno },
    { id: ACTIVITIES.SECRETO(3), titulo: 'Las tres flechas de Corte Isolani', imagen: imagenFlechas },
    { id: ACTIVITIES.SECRETO(4), titulo: 'El Voltone de Palazzo del Podestà', imagen: imagenVoltone },
    { id: ACTIVITIES.SECRETO(5), titulo: 'Canabis Protectio', imagen: imagenCanabis },
    { id: ACTIVITIES.SECRETO(6), titulo: 'El sol por un agujero', imagen: imagenSol },
    { id: ACTIVITIES.SECRETO(7), titulo: 'La cara del diablo', imagen: imagenDiablo },
  ];
  
  return (
    <div className="main-div">
      <h1 className="main-header">Los siete secretos de Bolonia</h1>

      <p className="paragraph">
        Bolonia es una ciudad de misterios: oculta siete secretos fascinantes 
        entre sus calles y pórticos que solo los más curiosos logran descubrir. 
        Esta aventura te invita a recorrer la ciudad paso a paso para desentrañar 
        cada uno de ellos. ¿Estás listo para convertirte en un auténtico explorador y encontrarlos todos?
        Sube una foto de cada secreto para marcar como completada la actividad.
      </p>

      <div className="grid grid-cols-2 gap-4 my-8">
        {secretos.map(act => (
          <TarjetaActividad 
            key={act.id}
            {...act}
            completada={isActivityCompleted(gameState.fotos, act.id)}
            onClick={() => navigate(`/bolonia/secretos/${act.id}`)}
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