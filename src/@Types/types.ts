import React from 'react';

export interface Entity {
  position: [number, number];
  size: [number, number];
  renderer: React.FC<any>;
}

export interface GameEntities {
  [key: string]: Entity;
  player: Entity;
  enemies: { [key: string]: Entity };
  items: { [key: string]: Entity };
}

export interface GameEngineEvent {
  touches: any[];
  time: { current: number };
  dispatch: (event: { type: string }) => void;
}

export interface IGameEngineUpdateEvent {
  time: {
    current: number; // O timestamp atual do jogo (em milissegundos)
    previous: number; // O timestamp da última atualização (em milissegundos)
  };
  delta: number; // Diferença de tempo entre atualizações (em milissegundos)
}

export interface Entity {
  position: [number, number];
  size: [number, number];
  spawnTime: number;
  type: string;
  renderer: React.ComponentType<any>;
  frozen?: boolean;  // Para inimigos que podem ser congelados
}
