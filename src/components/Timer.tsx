import { useState, useEffect } from 'react';

// Define la interfaz de props si necesitas pasarle una fecha objetivo distinta en cada caso
interface TimerProps {
  fechaObjetivo: Date;
  onTimeUp?: () => void; // Callback opcional por si quieres hacer algo extra al llegar a 0
}

export const Timer = ({ fechaObjetivo, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calcularTiempo = () => {
      const now = new Date();
      const diff = fechaObjetivo.getTime() - now.getTime();

      if (diff <= 0) {
        if (onTimeUp) onTimeUp();
        return false;
      }
      
      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
      return true;
    };

    const debeContinuar = calcularTiempo();
    let timer: ReturnType<typeof setInterval>;
    if (debeContinuar) timer = setInterval(calcularTiempo, 1000);
    return () => clearInterval(timer);
  }, [fechaObjetivo, onTimeUp]);

  return (
    <div className="bg-azul-medio text-white p-8 rounded-xl shadow-lg w-full mb-8">
      <h3 className="font-semibold text-lg mb-4 opacity-90">Próxima pista en:</h3>
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
  );
};