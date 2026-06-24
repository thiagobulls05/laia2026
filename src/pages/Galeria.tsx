import { Link } from 'react-router-dom';
import { GestorFoto } from '../components/GestorFoto';
import { useGame } from '../context/GameContext';
import { RECUERDOS } from '../utils/gameUtils'

export const Galeria = () => {
  const { gameState } = useGame();
  const total = RECUERDOS.length;
  const completadas = RECUERDOS.filter(act => gameState.fotos[act.id]).length;
  const porcentaje = (completadas / total) * 100;
  
  return (
    <div className="main-div">
      <h1 className="main-header">Galeria de los recuerdos</h1>
      <p className="paragraph">
        Todas las fotos que se guarden en las actividades se pueden revisar en esta galeria de los recuerdos. 
        ¡Mira cuánto has avanzado en tu aventura por Bolonia!
      </p>

      <div className="my-8 w-full">
        <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
          <span>Progreso de la aventura</span>
          <span>{completadas} / {total} descubiertos</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${
              completadas === total ? 'bg-green-600' : 'bg-green-500'
            }`}
            style={{ width: `${porcentaje}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {RECUERDOS.map((act) => (
          <div key={act.id} className="border-b border-gray-100 pb-4">
            <h3 className="font-bold text-gray-700 mb-2">{act.titulo}</h3>
            <GestorFoto 
              fotoUrl={gameState.fotos[act.id]} // Si no existe, muestra el candado
              pieDeFoto={act.pie}
              onFotoSubida={() => {}}
              soloLectura={true}
            />
          </div>
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