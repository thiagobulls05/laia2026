// src/components/TarjetaRecomendacion.tsx
interface RecomendacionProps {
  nombre: string;
  urlMaps: string;
}

export const TarjetaRecomendacion = ({ nombre, urlMaps }: RecomendacionProps) => (
  <a 
    href={urlMaps} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block w-full bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-rose-400 transition-colors text-left"
  >
    <h4 className="font-bold text-gray-800">{nombre}</h4>
    <p className="text-xs text-rose-600 font-semibold mt-1 underline">Abrir ubicación en Maps 📍</p>
  </a>
);