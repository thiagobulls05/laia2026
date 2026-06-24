import { useRef } from 'react';
import { processImage } from '../utils/gameUtils';

interface GestorFotoProps {
  fotoUrl?: string;
  onFotoSubida: (fotoBase64: string) => void;
  pieDeFoto?: string;
  soloLectura?: Boolean;
}

export const GestorFoto = ({ fotoUrl, onFotoSubida, pieDeFoto, soloLectura = false }: GestorFotoProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (soloLectura) return;

    const file = event.target.files?.[0];
    if (file) {
      const base64 = await processImage(file);
      onFotoSubida(base64);
    }
  };

  return (
    <div className="w-full my-6 flex flex-col items-center">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      {fotoUrl ? (
        <div className="w-full rounded-2xl overflow-hidden shadow-lg border-2 border-green-500 relative">
          <img src={fotoUrl} alt="Recuerdo" className="w-full h-64 object-cover" />
          <div className="bg-green-50 p-3 text-sm font-bold text-green-800 text-center">
            {pieDeFoto || "¡Recuerdo guardado!"}
          </div>
        </div>
      ) : (
        <div 
          onClick={!soloLectura ? () => fileInputRef.current?.click() : undefined}
          className={`w-full h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center bg-gray-50 
            ${soloLectura ? 'border-gray-200 opacity-60' : 'border-gray-300 cursor-pointer hover:border-rose-400'}`}
        >
          <span className="text-5xl mb-4">🔒</span>
          {!soloLectura && (
            <p className="text-gray-500 text-sm font-bold mt-2">Subir foto del recuerdo</p>
          )}
        </div>
      )}
    </div>
  );
};