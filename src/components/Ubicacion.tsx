interface UbicacionProps {
  titulo: string;
  urlGoogleMaps: string; // La URL de "Compartir ubicación" de Google Maps
  srcEmbed: string;     // La URL para el iframe (embebido)
}

export const Ubicacion = ({ titulo, urlGoogleMaps, srcEmbed }: UbicacionProps) => {
  return (
    <div className="w-full mb-8 rounded-xl overflow-hidden shadow-lg border-2 border-azul-oscuro">
      <h3 className="bg-azul-oscuro text-white p-3 font-semibold text-center">{titulo}</h3>
      
      {/* Al hacer clic en el contenedor, redirige a Google Maps */}
      <a 
        href={urlGoogleMaps} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block cursor-pointer hover:opacity-90 transition-opacity"
      >
        <iframe
          src={srcEmbed}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title={titulo}
        />
        <div className="bg-white p-2 text-center text-sm text-azul-oscuro font-bold underline">
          Abrir en Google Maps 📍
        </div>
      </a>
    </div>
  );
};