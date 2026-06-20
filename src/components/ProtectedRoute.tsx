import { Navigate } from 'react-router-dom';
import type { ReactElement } from 'react';
import { useGame } from '../context/GameContext';
import { canAccess } from '../utils/gameUtils';

interface Props {
  path: string;
  children: ReactElement; 
}

export const ProtectedRoute = ({ path, children }: Props) => {
  const { gameState } = useGame();

  // Si no tiene acceso, redirigimos al inicio
  if (!canAccess(gameState.gameStage, path)) {
    return <Navigate to="/" replace />;
  }

  return children;
};