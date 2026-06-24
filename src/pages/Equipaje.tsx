import { Link } from 'react-router-dom';

const categorias = [
  {
    titulo: 'Ropa',
    items: ['Bambas cómodas', 'Chanclas', 'Bikini', 'Ropa interior (2 días)', 'Camisetas (2 días)', 'Pantalones (2 días)', 'Vestido cena romántica', 'Pijama']
  },
  {
    titulo: 'Neceser',
    items: ['Cepillo de dientes', 'Protector Solar', 'Desodorante', 'Perfume', 'Cacao', 'Bruma', 'Eutirox', 'Medicamentos básicos']
  },
  {
    titulo: 'Tecnología',
    items: ['Cámara de fotos', 'Móvil', 'Cargador de móvil', 'Power bank', 'Auriculares']
  },
  {
    titulo: 'Accesorios',
    items: ['Mochila', 'Bolso', 'DNI', 'Carnet Universidad', 'Gafas de sol', 'Botella de agua']
  }
];

export const Equipaje = () => {
  return (
    <div className="main-div">
      <h1 className="main-header">Equipaje necesario 🧳</h1>
      <p className="paragraph">
        Para que la aventura sea perfecta, prepara con mínimo todo lo necesario. 
        Aquí tienes la lista de esenciales para el viaje que han de ir en tu mochila de viaje.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categorias.map((cat) => (
          <div key={cat.titulo} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:shadow-md">
            <h2 className="text-lg font-bold text-azul-oscuro mb-4 border-b-2 border-crema-intenso pb-2 inline-block">
              {cat.titulo}
            </h2>
            <ul className="text-left space-y-3">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-azul-medio rounded-full mr-3"></span> 
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center text-azul-oscuro font-medium hover:text-azul-medio transition-all group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};