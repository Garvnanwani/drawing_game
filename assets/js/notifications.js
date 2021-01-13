const notifications = document.getElementById("jsNotifs")

const fireNotification = (text, color) => {
  const notification = document.createElement("div")
  notification.innerText = text
  notification.style.backgroundColor = color
  notifications.appendChild(notification)
}

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined!`, "rgb(0, 122, 255)")
}
