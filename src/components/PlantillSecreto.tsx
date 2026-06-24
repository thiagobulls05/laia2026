import { Link } from 'react-router-dom';
import { Ubicacion } from './Ubicacion';

interface PlantillaSecretoProps {
  titulo: string;
  descripcion: string;
  tituloUbicacion: string;
  urlGoogleMaps: string;
  srcEmbed: string;
}

export const PlantillaSecreto = ({ 
  titulo, 
  descripcion, 
  tituloUbicacion, 
  urlGoogleMaps, 
  srcEmbed 
}: PlantillaSecretoProps) => {
  return (
    <div className="main-div">
      <h1 className="main-header">{titulo}</h1>

      <p className="paragraph">
        {descripcion}
      </p>

      <Ubicacion 
        titulo={tituloUbicacion}
        urlGoogleMaps={urlGoogleMaps}
        srcEmbed={srcEmbed}
      />

      <div className="mt-12 text-center">
        <Link 
          to="/bolonia/secretos" 
          className="inline-flex items-center text-azul-oscuro font-medium hover:text-azul-medio transition-all group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Volver al menú anterior
        </Link>
      </div>
    </div>
  );
};