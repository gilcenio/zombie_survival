const MovePlayer = (entities, { touches }) => {
  const player = entities.player;

  touches.forEach((touch) => {
    if (touch.type === 'move') {
      player.position[0] += touch.delta.pageX;
      player.position[1] += touch.delta.pageY;
    }
  });

  return entities;
};

export default MovePlayer;
