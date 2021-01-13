import events from "./events"

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.broadcast.emit(events.newUser, { nickname })
    socket.nickname = nickname
  })
  socket.on(events.disconnect, () => {
    console.log("disconnected")
  })
}

export default socketController
