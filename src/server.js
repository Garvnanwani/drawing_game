import express from "express"
import path from "path"
import * as socketio from "socket.io"
import logger from "morgan"

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))
app.use(logger("dev"))
app.use(express.static(path.join(__dirname, "static")))
app.get("/", (req, res) => {
  res.render("home")
})

const server = app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`)
})

const io = new socketio.Server(server)

io.on("connection", (socket) => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anonymous",
    })
  })
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname
  })
})
