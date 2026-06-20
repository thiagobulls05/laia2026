import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { db } from '../config/firebase';
import { doc, onSnapshot, updateDoc, setDoc } from 'firebase/firestore';
import { type GameStage } from '../utils/gameUtils';

interface GameState {
  gameStage: GameStage;
  fotos: { [key: string]: string };
}

interface GameContextType {
  gameState: GameState;
  updateStage: (stage: GameStage) => void;
  savePhoto: (secretoId: string, base64: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// Cambia esto a 'false' cuando quieras conectar con Firebase de verdad
const MODO_TESTING = true;

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>({
    gameStage: 'inicio',
    fotos: {}
  });

  useEffect(() => {
    if (MODO_TESTING) {
      console.log("Modo Testing activado: Usando datos locales");
      return;
    }

    const docRef = doc(db, "gincana", "laia_data");
    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setGameState(docSnap.data() as GameState);
      } else {
        setDoc(docRef, { gameStage: 'inicio', fotos: {} });
      }
    });
    return () => unsub();
  }, []);

  const updateStage = async (newStage: GameStage) => {
    if (MODO_TESTING) {
      setGameState(prev => ({ ...prev, gameStage: newStage }));
      return;
    }
    await updateDoc(doc(db, "gincana", "laia_data"), { gameStage: newStage });
  };

  const savePhoto = async (secretoId: string, base64: string) => {
    if (MODO_TESTING) {
      setGameState(prev => ({
        ...prev,
        fotos: { ...prev.fotos, [secretoId]: base64 }
      }));
      return;
    }
    await updateDoc(doc(db, "gincana", "laia_data"), { 
      [`fotos.${secretoId}`]: base64 
    });
  };

  return (
    <GameContext.Provider value={{ gameState, updateStage, savePhoto }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame debe usarse dentro de un GameProvider");
  return context;
};