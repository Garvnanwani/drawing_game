(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNzZjNTY2MjUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIlxuIl19
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var nickname = localStorage.getItem("nickname");
var loginForm = document.getElementById("jsLogin");

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit("setNickname", {
    nickname: nickname
  });
};

if (!nickname) {
  body.classList.add("loggedOut");
} else {
  body.classList.add("loggedIn");
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = document.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem("nickname", value);
  body.className = "loggedIn";
  logIn(nickname);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiY2xhc3NOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUdMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixTQUF4QixDQUFsQjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTCxRQUFELEVBQWM7QUFDMUIsTUFBTU0sTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVSLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNELENBSEQ7O0FBS0EsSUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYkgsRUFBQUEsSUFBSSxDQUFDWSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsV0FBbkI7QUFDRCxDQUZELE1BRU87QUFDTGIsRUFBQUEsSUFBSSxDQUFDWSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBbkI7QUFDQUwsRUFBQUEsS0FBSyxDQUFDTCxRQUFELENBQUw7QUFDRDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHaEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFGOEIsTUFHdEJnQixLQUhzQixHQUdaRCxLQUhZLENBR3RCQyxLQUhzQjtBQUk5QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNELEtBQWpDO0FBQ0FsQixFQUFBQSxJQUFJLENBQUNvQixTQUFMLEdBQWlCLFVBQWpCO0FBQ0FaLEVBQUFBLEtBQUssQ0FBQ0wsUUFBRCxDQUFMO0FBQ0QsQ0FSRDs7QUFVQSxJQUFJRyxTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDZSxnQkFBVixDQUEyQixRQUEzQixFQUFxQ1AsZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuaWNrbmFtZVwiKVxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpXG5cbmNvbnN0IGxvZ0luID0gKG5pY2tuYW1lKSA9PiB7XG4gIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKVxuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSlcbn1cblxuaWYgKCFuaWNrbmFtZSkge1xuICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2dnZWRPdXRcIilcbn0gZWxzZSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvZ2dlZEluXCIpXG4gIGxvZ0luKG5pY2tuYW1lKVxufVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0XG4gIGlucHV0LnZhbHVlID0gXCJcIlxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5pY2tuYW1lXCIsIHZhbHVlKVxuICBib2R5LmNsYXNzTmFtZSA9IFwibG9nZ2VkSW5cIlxuICBsb2dJbihuaWNrbmFtZSlcbn1cblxuaWYgKGxvZ2luRm9ybSkge1xuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KVxufVxuIl19
},{}]},{},[1])