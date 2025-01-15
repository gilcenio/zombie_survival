import React, { useState } from 'react';
import { StyleSheet, Alert, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import SpawnEnemies from './src/Functions/SpawnEnemies';
import SpawnItems from './src/Functions/SpawnItems';
import HandleCollisions from './src/Functions/HandleCollisions';
import Player from './src/Components/Player';
import MovePlayer from './src/Functions/MovePlayer';
import MoveEnemies from './src/Functions/MoveEnemies';

const { width, height } = Dimensions.get('window');

const App = () => {
  const [running, setRunning] = useState(true);
  const [gameEngineKey, setGameEngineKey] = useState(0);

  const restartGame = () => {
    setGameEngineKey((prevKey) => prevKey + 1);
    setRunning(true);
  };

  const handleGameOver = () => {
    setRunning(false);
    Alert.alert(
      'Game Over',
      'Você perdeu! Deseja jogar novamente?',
      [
        { text: 'Sim', onPress: restartGame },
      ]
    );
  };

  const initializeEntities = () => ({
    player: {
      position: [width / 2, height / 2],
      size: [50, 50],
      speed: 5,
      lives: 3,
      renderer: Player,
    },
    bullets: [],
    lastEnemySpawn: 0,
    lastItemSpawn: 0,
  });

  return (
    <GameEngine
      key={gameEngineKey}
      style={styles.gameEngine}
      systems={[MovePlayer, SpawnEnemies, SpawnItems, MoveEnemies, HandleCollisions]}
      entities={initializeEntities()}
      running={running}
      onEvent={(e) => {
        if (e.type === 'game-over') {
          handleGameOver();
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  score: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gameEngine: {
    flex: 1,
  },
});

export default App;