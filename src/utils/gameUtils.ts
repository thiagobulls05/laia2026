// Definimos las etapas del juego
export type GameStage = 'inicio' | 'aeropuerto' | 'hotel' | 'bolonia' | 'final';

// Lista de todas las actividades que requieren foto para marcarse como completadas
export const ACTIVITIES = {
  SECRETOS: 'secretos',
  VISTAS: 'torres',
  CENA: 'restaurantes',
  GALERIA: 'galeria',
  // Secretos individuales (secreto_1 a secreto_7)
  SECRETO: (n: number) => `secreto_${n}`
};

// Reglas de acceso: qué pantallas son visibles en cada etapa
const stageAccess: Record<GameStage, string[]> = {
  inicio: ['inicio', 'equipaje'],
  aeropuerto: ['inicio', 'aeropuerto', 'equipaje'],
  hotel: ['inicio', 'aeropuerto', 'hotel', 'equipaje'],
  bolonia: ['inicio', 'aeropuerto', 'hotel', 'bolonia', 'equipaje'],
  final: ['inicio', 'aeropuerto', 'hotel', 'bolonia', 'equipaje', 'final']
};

export const canAccess = (stage: GameStage, targetScreen: string): boolean => {
  // 1. Primero, definimos las pantallas permitidas explícitas
  const allowed = stageAccess[stage] || [];

  // 2. Si la pantalla es una de las permitidas directamente, devuelve true
  if (allowed.includes(targetScreen)) return true;

  // 3. Lógica para sub-rutas: 
  // Si estamos en etapa 'bolonia' o superior, permitimos cualquier cosa que empiece por 'bolonia/'
  if ((stage === 'bolonia' || stage === 'final') && targetScreen.startsWith('bolonia/')) {
    return true;
  }

  return false;
};

//Determina si una actividad está completada basándose en si existe la foto.
//fotos: es el objeto { [key: string]: string } que viene de Firestore
export const isActivityCompleted = (fotos: Record<string, string>, activityId: string): boolean => {
  return !!fotos[activityId];
};

// Calcula si todas las actividades de un grupo están completadas
export const areAllActivitiesCompleted = (fotos: Record<string, string>, activityIds: string[]): boolean => {
  return activityIds.every(id => isActivityCompleted(fotos, id));
};

// Función para procesar imágenes (lo que ya teníamos)
export const processImage = (file: File, maxWidth = 800): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
    };
    reader.onerror = reject;
  });
};