interface TarjetaVueloProps {
  aerolinea: string;
  vuelo: string;
  origen: string;
  destino: string;
  horaSalida: string;
  horaLlegada: string;
}

export const TarjetaVuelo = ({ aerolinea, vuelo, origen, destino, horaSalida, horaLlegada }: TarjetaVueloProps) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 w-full max-w-sm mx-auto mb-8">
      {/* Cabecera de la Aerolínea */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-gray-800 text-xl tracking-tight">{aerolinea}</h3>
        <span className="bg-rose-50 text-rose-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{vuelo}</span>
      </div>

      {/* Tiempos y ciudades */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-center">
          <p className="text-3xl font-black text-gray-900">{horaSalida}</p>
          <p className="text-sm font-bold text-gray-400 uppercase">{origen}</p>
        </div>
        
        <div className="flex-1 px-4">
          <div className="relative flex items-center justify-center">
            <div className="h-0.5 bg-gray-200 w-full"></div>
            <span className="absolute bg-white px-2 text-xl">✈️</span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-3xl font-black text-gray-900">{horaLlegada}</p>
          <p className="text-sm font-bold text-gray-400 uppercase">{destino}</p>
        </div>
      </div>

      {/* Detalles extra */}
      <div className="flex justify-between border-t border-dashed border-gray-300 pt-6">
        <a 
          href={`https://www.google.com/search?q=vuelo+${vuelo}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] text-blue-600 font-bold underline self-end"
        >
          Estado real
        </a>
      </div>
    </div>
  );
};