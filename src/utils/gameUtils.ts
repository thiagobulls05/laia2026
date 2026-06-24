// Definimos las etapas del juego
export type GameStage = 'inicio' | 'aeropuerto' | 'hotel' | 'bolonia' | 'final';

// Lista de todas las actividades que requieren foto para marcarse como completadas
export const ACTIVITIES = {
  SECRETOS: 'secretos',
  VISTAS: 'torres',
  CENA: 'restaurantes',
  GALERIA: 'galeria',
  TORRE_RELOJ: 'torre_reloj',
  TORRE_PRENDIPARTE: 'torre_prendiparte',
  // Secretos individuales (secreto_1 a secreto_7)
  SECRETO: (n: number) => `secreto_${n}`
};

export const RECUERDOS = [
  { id: ACTIVITIES.TORRE_RELOJ, titulo: 'La Torre del reloj de Bolonia', pie: '¡Vistas desde la torre del Reloj!' },
  { id: ACTIVITIES.TORRE_PRENDIPARTE, titulo: 'La Torre Prendiparte', pie: '¡Vistas desde la torre Prendiparte!' },
  { id: ACTIVITIES.CENA, titulo: 'Osteria da Fortunata', pie: '¡Cena romántica disfrutada!' },
  { id: ACTIVITIES.SECRETO(1), titulo: 'La Ventanilla de Via Piella', pie: '¡Ventana descubierta!' },
  { id: ACTIVITIES.SECRETO(2), titulo: 'El dedo de Neptuno', pie: '¡Neptuno descubierto!' },
  { id: ACTIVITIES.SECRETO(3), titulo: 'Las tres flechas de Corte Isolani', pie: '¡Flechas descubiertas!' },
  { id: ACTIVITIES.SECRETO(4), titulo: 'El Voltone de Palazzo del Podestà', pie: '¡Voltone descubierto!' },
  { id: ACTIVITIES.SECRETO(5), titulo: 'Canabis Protectio', pie: '¡Canabis Protectio descubierto!' },
  { id: ACTIVITIES.SECRETO(6), titulo: 'El sol por un agujero', pie: '¡Sol descubierto!' },
  { id: ACTIVITIES.SECRETO(7), titulo: 'La cara del diablo', pie: '¡Diablo descubierto!' },
];

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