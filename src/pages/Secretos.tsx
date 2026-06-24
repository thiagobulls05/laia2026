import { Link } from 'react-router-dom';

export const Secretos = () => {
  
  return (
    <div className="main-div">
      <h1 className="main-header">Los siete secretos de Bolonia</h1>

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