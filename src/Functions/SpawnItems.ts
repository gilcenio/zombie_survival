import { Dimensions } from 'react-native';
import { GameEntities } from '../@Types/types';
import { IGameEngineUpdateEvent } from '../@Types/types';
import Item from '../Components/Item';

const { width, height } = Dimensions.get('window');

const ITEM_TYPES = [
  'speed-boost',
  'shield',
  'extra-life',
  'weapon',
  'invincibility',
  'magnet',
  'explosion',
  'freeze',
  'shrink',
  'vision',
];

const SpawnItems = (entities: GameEntities, { time }: IGameEngineUpdateEvent) => {
  const { lastItemSpawn } = entities;

  if (time.current - lastItemSpawn > 3000) { // A cada 3 segundos
    const x = Math.random() * width;
    const y = Math.random() * height;
    const type = ITEM_TYPES[Math.floor(Math.random() * ITEM_TYPES.length)];

    entities[`item_${time.current}`] = {
      position: [x, y],
      size: [30, 30],
      type,
      renderer: Item,
    };

    entities.lastItemSpawn = time.current;
  }

  return entities;
};

export default SpawnItems;
