import React from 'react';
import { View } from 'react-native';

const Item = ({ position, size }: { position: [number, number]; size: [number, number] }) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: size[0],
        height: size[1],
        backgroundColor: 'green',
        left: position[0],
        top: position[1],
      }}
    />
  );
};

export default Item;
