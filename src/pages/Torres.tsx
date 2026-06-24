import { Link } from 'react-router-dom';


export const Torres = () => {
  
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-azul-oscuro mb-6">Vistas en las alturas</h1>

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