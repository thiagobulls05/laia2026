// src/components/TarjetaReserva.tsx
interface ReservaProps {
  lugar: string;
  fecha: string;
  hora: string;
  descripcion: string;
}

export const TarjetaReserva = ({ lugar, fecha, hora, descripcion }: ReservaProps) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border-l-4 border-rose-500 w-full mb-8 text-left">
      <h3 className="text-xl font-black text-gray-800 mb-2">{lugar}</h3>
      <div className="flex gap-4 text-sm text-gray-500 font-bold mb-4">
        <span>📅 {fecha}</span>
        <span>⏰ {hora}</span>
      </div>
      <p className="text-gray-600 leading-relaxed text-justify">
        {descripcion}
      </p>
    </div>
  );
};