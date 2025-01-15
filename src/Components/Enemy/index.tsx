import React from 'react';
import { View } from 'react-native';

const Enemy = ({ position, size }: { position: [number, number]; size: [number, number] }) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: size[0],
        height: size[1],
        backgroundColor: 'red',
        left: position[0],
        top: position[1],
      }}
    />
  );
};

export default Enemy;
