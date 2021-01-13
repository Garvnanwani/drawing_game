import { handleNewMessage } from "./chat"
import { handleDisconnected, handleNewUser } from "./notifications"

let socket = null

export const getSocket = () => socket

export const initSockets = (aSocket) => {
  const { events } = window
  socket = aSocket
  socket.on(events.newUser, handleNewUser)
  socket.on(events.disconnected, handleDisconnected)
  socket.on(events.newMsg, handleNewMessage)
  socket.on(events.beganPath, handleBeganPath)
  socket.on(events.strokedPath, handleStrokedPath)
  socket.on(events.filled, handleFilled)
  socket.on(events.playerUpdate, handlePlayerUpdate)
  socket.on(events.gameStarted, handleGameStarted)
  socket.on(events.leaderNotif, handleLeaderNotif)
  socket.on(events.gameEnded, handleGameEnded)
  socket.on(events.gameStarting, handleGameStarting)
}
