const body = document.querySelector("body")
const nickname = localStorage.getItem("nickname")
const loginForm = document.getElementById("jsLogin")

const handleFormSubmit = (e) => {
  e.preventDefault()
  const input = document.querySelector("input")
  const { value } = input
  localStorage.setItem("nickname", value)
  input.value = ""
}

if (!nickname) {
  body.classList.add("loggedOut")
} else {
  body.classList.add("loggedIn")
}

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit)
}
