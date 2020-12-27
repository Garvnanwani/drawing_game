const socket = io("/")

const sendMessage = (message) => {
  socket.emit("newMessage", { message })
  console.log(`You said ${message}`)
}

const setNickname = (nickname) => {
  socket.emit("setNickname", { nickname })
}

const handleMessageNotif = (data) => {
  const { message, nickname } = data
  console.log(`${nickname}: ${message}`)
}

socket.on("messageNotif", handleMessageNotif)
