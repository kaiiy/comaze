import rooms from '~/assets/transition.json'

const getCurrentRoomObj = (currentRoom) => {
  if (currentRoom === 1) {
    return {
      room: 1,
      hint1: '',
      strong1: '',
      next1: '',
      hint2: 'START',
      next2: 2,
      strong2: '',
      hint3: '',
      next3: '',
      strong3: '',
    }
  } else if (currentRoom === 25) {
    return {
      room: 25,
      hint1: '',
      strong1: '',
      next1: '',
      hint2: '',
      next2: '',
      strong2: '',
      hint3: '',
      next3: '',
      strong3: '',
      symbol: 'f',
    }
  }

  let currentRoomObj = rooms[currentRoom - 2]

  //   数値が合ってなかったとき用
  if (currentRoomObj.room !== currentRoom) {
    rooms.forEach((room) => {
      if (room.room === currentRoom) currentRoomObj = room
    })
  }

  return currentRoomObj
}

export default getCurrentRoomObj
