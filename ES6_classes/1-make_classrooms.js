import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  return roomSizes.map(size => new ClassRoom(size));
}

export default initializeRooms;