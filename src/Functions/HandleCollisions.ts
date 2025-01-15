import { GameEntities, GameEngineEvent } from '../types';

const checkCollision = (
  [x1, y1]: [number, number],
  [w1, h1]: [number, number],
  [x2, y2]: [number, number],
  [w2, h2]: [number, number]
): boolean => {
  return (
    x1 < x2 + w2 &&
    x1 + w1 > x2 &&
    y1 < y2 + h2 &&
    y1 + h1 > y2
  );
};

const HandleCollisions = (entities: GameEntities, { dispatch }: GameEngineEvent) => {
  const player = entities.player;

  if (!player) return entities;

  const playerPos = player.position;
  const playerSize = player.size;

  Object.keys(entities).forEach((key) => {
    if (key.startsWith('enemy_')) {
      const enemy = entities[key];
      if (checkCollision(playerPos, playerSize, enemy.position, enemy.size)) {
        console.log('Player hit by enemy!');
        dispatch({ type: 'game-over' });
      }
    }

    if (key.startsWith('item_')) {
      const item = entities[key];
      if (checkCollision(playerPos, playerSize, item.position, item.size)) {
        console.log('Player collected item!');
        player.size[0] += 5;
        player.size[1] += 5;
        player.speed += 1;
        delete entities[key];
      }
    }
  });

  return entities;
};

export default HandleCollisions;
