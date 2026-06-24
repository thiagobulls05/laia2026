interface TarjetaProps {
  id: string;
  titulo: string;
  imagen: string; 
  completada: boolean;
  onClick: () => void;
}

export const TarjetaActividad = ({ titulo, imagen, completada, onClick }: TarjetaProps) => {
  return (
    <div 
      onClick={onClick}
      // 1. Aseguramos el redondeo en el contenedor padre
      className={`flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-md ${
        completada ? 'opacity-80 grayscale-[0.5]' : ''
      }`}
    >
      {/* 2. Imagen con altura fija */}
      <img src={imagen} alt={titulo} className="w-full h-32 object-cover" />
      
      {/* 3. Contenedor de texto con altura fija o mínima para igualar tamaños */}
      <div className="p-3 bg-white flex-grow flex items-center justify-center min-h-[80px]">
        <h3 className="font-bold text-gray-800 text-sm text-center leading-tight">
          {titulo}
        </h3>
      </div>

      {/* Filtro verde superpuesto */}
      {completada && (
        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center pointer-events-none">
          <span className="text-white font-bold bg-black/50 px-2 py-1 rounded text-xs">Completado ✓</span>
        </div>
      )}
    </div>
  );
};

