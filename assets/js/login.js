const body = document.querySelector("body")
const nickname = localStorage.getItem("nickname")

if (!nickname) {
  body.classList.add("loggedOut")
} else {
  body.classList.add("loggedIn")
}
