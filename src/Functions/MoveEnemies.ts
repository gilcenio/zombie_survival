import {GameEntities, GameEngineEvent} from '../@Types/types'

const MoveEnemies = (entities: GameEntities, { time }: GameEngineEvent) => {
  const player = entities.player;

  if (!player) return entities;

  const playerPos = player.position;

  Object.keys(entities).forEach((key) => {
    if (key.startsWith('enemy_')) {
      const enemy = entities[key];
      const enemyPos = enemy.position;

      // Velocidade do inimigo
      const speed = 2;

      // Calcular direção para o jogador
      const dx = playerPos[0] - enemyPos[0];
      const dy = playerPos[1] - enemyPos[1];
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0) {
        enemy.position[0] += (dx / distance) * speed;
        enemy.position[1] += (dy / distance) * speed;
      }
    }
  });

  return entities;
};

export default MoveEnemies;
