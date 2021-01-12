(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNWNhYTY1ODAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIlxuIl19
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var nickname = localStorage.getItem("nickname");
var loginForm = document.getElementById("jsLogin");

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJjbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBR0wsUUFBUSxDQUFDTSxjQUFULENBQXdCLFNBQXhCLENBQWxCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNMLFFBQUQsRUFBYztBQUMxQixNQUFNTSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVgsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiSCxFQUFBQSxJQUFJLENBQUNlLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjtBQUNELENBRkQsTUFFTztBQUNMaEIsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBbkI7QUFDQVIsRUFBQUEsS0FBSyxDQUFDTCxRQUFELENBQUw7QUFDRDs7QUFFRCxJQUFNYyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFGOEIsTUFHdEJtQixLQUhzQixHQUdaRCxLQUhZLENBR3RCQyxLQUhzQjtBQUk5QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBakIsRUFBQUEsWUFBWSxDQUFDa0IsT0FBYixDQUFxQixVQUFyQixFQUFpQ0QsS0FBakM7QUFDQXJCLEVBQUFBLElBQUksQ0FBQ3VCLFNBQUwsR0FBaUIsVUFBakI7QUFDQWYsRUFBQUEsS0FBSyxDQUFDTCxRQUFELENBQUw7QUFDRCxDQVJEOztBQVVBLElBQUlHLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNrQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ1AsZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuaWNrbmFtZVwiKVxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpXG5cbmNvbnN0IGxvZ0luID0gKG5pY2tuYW1lKSA9PiB7XG4gIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKVxuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pXG59XG5cbmlmICghbmlja25hbWUpIHtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VkT3V0XCIpXG59IGVsc2Uge1xuICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2dnZWRJblwiKVxuICBsb2dJbihuaWNrbmFtZSlcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dFxuICBpbnB1dC52YWx1ZSA9IFwiXCJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuaWNrbmFtZVwiLCB2YWx1ZSlcbiAgYm9keS5jbGFzc05hbWUgPSBcImxvZ2dlZEluXCJcbiAgbG9nSW4obmlja25hbWUpXG59XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdClcbn1cbiJdfQ==
},{}]},{},[1])