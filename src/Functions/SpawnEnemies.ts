import { Dimensions } from 'react-native';
import { GameEngineEvent, GameEntities } from '../@Types/types';

const { width, height } = Dimensions.get('window');

const SpawnEnemies = (entities: GameEntities, { time }: GameEngineEvent) => {
  const spawnRate = 2000; // Intervalo de spawn (2 segundos)
  const lastSpawn = entities.lastEnemySpawn || 0;

  if (time.current - lastSpawn > spawnRate) {
    const enemyId = `enemy_${Math.random()}`;
    const size = 30;

    // Escolher uma posição aleatória na borda
    const edge = Math.floor(Math.random() * 4); // 0 = Top, 1 = Right, 2 = Bottom, 3 = Left
    let position: [number, number];

    switch (edge) {
      case 0: // Top
        position = [Math.random() * width, -size];
        break;
      case 1: // Right
        position = [width + size, Math.random() * height];
        break;
      case 2: // Bottom
        position = [Math.random() * width, height + size];
        break;
      case 3: // Left
        position = [-size, Math.random() * height];
        break;
      default:
        position = [0, 0];
    }

    // Adicionar novo inimigo às entidades
    entities[enemyId] = {
      position,
      size: [size, size],
      renderer: require('../Components/Enemy').default,
    };

    entities.lastEnemySpawn = time.current; // Atualizar o tempo do último spawn
  }

  return entities;
};

export default SpawnEnemies;
