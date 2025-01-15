import React from 'react';
import { View } from 'react-native';

const Player = ({ position, size }: { position: [number, number]; size: [number, number] }) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: size[0],
        height: size[1],
        backgroundColor: 'blue',
        left: position[0],
        top: position[1],
      }}
    />
  );
};

export default Player;
