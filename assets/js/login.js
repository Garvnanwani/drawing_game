const body = document.querySelector("body")
const nickname = localStorage.getItem("nickname")
const loginForm = document.getElementById("jsLogin")

const logIn = (nickname) => {
  window.socket = io("/")
  window.socket.emit(window.events.setNickname, { nickname })
}

if (!nickname) {
  body.classList.add("loggedOut")
} else {
  body.classList.add("loggedIn")
  logIn(nickname)
}

const handleFormSubmit = (e) => {
  e.preventDefault()
  const input = document.querySelector("input")
  const { value } = input
  input.value = ""
  localStorage.setItem("nickname", value)
  body.className = "loggedIn"
  logIn(nickname)
}

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit)
}
