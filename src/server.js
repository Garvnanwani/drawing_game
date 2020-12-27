import express from "express"
import path from "path"
const __dirname = path.dirname(new URL(import.meta.url).pathname)

const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "pug")

app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.render("home")
})

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`)
})
