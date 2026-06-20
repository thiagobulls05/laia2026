import { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { Link } from 'react-router-dom';
import inicioImg from '../assets/inicio.png';

const FECHA_OBJETIVO = new Date('2026-07-20T11:34:00');

export const Inicio = () => {
  const { updateStage } = useGame();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [esHoraDeRevelar, setEsHoraDeRevelar] = useState(false);

  useEffect(() => {
      // 1. Definimos la función que calcula el tiempo
      const calcularTiempo = () => {
        const now = new Date();
        const diff = FECHA_OBJETIVO.getTime() - now.getTime();

        if (diff <= 0) {
          setEsHoraDeRevelar(true);
          return false; // Indica que el timer debe parar
        } else {
          setEsHoraDeRevelar(false);
          setTimeLeft({
            d: Math.floor(diff / (1000 * 60 * 60 * 24)),
            h: Math.floor((diff / (1000 * 60 * 60)) % 24),
            m: Math.floor((diff / 1000 / 60) % 60),
            s: Math.floor((diff / 1000) % 60),
          });
          return true; // Indica que el timer debe continuar
        }
      };

      // 2. Llamamos a la función inmediatamente al montar
      const debeContinuar = calcularTiempo();

      // 3. Si aún falta tiempo, iniciamos el intervalo
      let timer: ReturnType<typeof setInterval>;
      if (debeContinuar) {
        timer = setInterval(calcularTiempo, 1000);
      }

      return () => clearInterval(timer);
    }, []);

  return (
    <div className="p-6 text-center flex flex-col items-center max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-azul-oscuro mb-6">¡Feliz Cumpleaños, Laia! 🎂</h1>
      
      <img 
        src={inicioImg} 
        alt="Inicio aventura" 
        className="w-64 h-auto rounded-lg shadow-md mb-8" 
      />

      <p className="text-justify text-gray-800 mb-8 leading-relaxed">
        He preparado una actividad especial para los días 14 y 15 de agosto que va ligada a esta aplicación. 
        En cualquier momento podrás acceder aquí para ver la evolución de la aventura y las acciones 
        que tienes que realizar. ¡Mucha suerte, Gordita!
      </p>
      
      <div className="bg-azul-medio text-white p-8 rounded-xl shadow-lg w-full mb-8">
        <h3 className="font-semibold text-lg mb-4 opacity-90">La aventura comienza en:</h3>
        <div className="flex justify-center gap-6 text-4xl font-mono font-bold">
          <div className="flex flex-col">
            <span>{timeLeft.d}</span>
            <span className="text-xs uppercase opacity-75">días</span>
          </div>
          <div className="flex flex-col">
            <span>{timeLeft.h}</span>
            <span className="text-xs uppercase opacity-75">hrs</span>
          </div>
          <div className="flex flex-col">
            <span>{timeLeft.m}</span>
            <span className="text-xs uppercase opacity-75">min</span>
          </div>
          <div className="flex flex-col">
            <span>{timeLeft.s}</span>
            <span className="text-xs uppercase opacity-75">seg</span>
          </div>
        </div>
      </div>
      {esHoraDeRevelar ? (
        <button 
          className="bg-accent hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={() => updateStage('aeropuerto')}
        >
          Revelar Pista
        </button>
      ) : (
        <p className="text-sm text-gray-500 italic">Cuando el contador llegue a 0, se mostrará la proxima pista.</p>
      )}
      <Link 
        to="/equipaje" 
        className="mt-8 text-azul-oscuro font-medium flex items-center gap-2 hover:text-azul-medio transition-all group"
      >
        Ver material necesario
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
};