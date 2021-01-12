(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZDQzNTdmZmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIlxuIl19
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var nickname = localStorage.getItem("nickname");
var loginForm = document.getElementById("jsLogin");

var logIn = function logIn(nickname) {
  window.socket = io("/");
  window.socket.emit(window.events.setNickname, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsImxvZ0luIiwid2luZG93Iiwic29ja2V0IiwiaW8iLCJlbWl0IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJjbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBR0wsUUFBUSxDQUFDTSxjQUFULENBQXdCLFNBQXhCLENBQWxCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNMLFFBQUQsRUFBYztBQUMxQk0sRUFBQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCQyxFQUFFLENBQUMsR0FBRCxDQUFsQjtBQUNBRixFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0UsSUFBZCxDQUFtQkgsTUFBTSxDQUFDSSxNQUFQLENBQWNDLFdBQWpDLEVBQThDO0FBQUVYLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUE5QztBQUNELENBSEQ7O0FBS0EsSUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYkgsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsV0FBbkI7QUFDRCxDQUZELE1BRU87QUFDTGhCLEVBQUFBLElBQUksQ0FBQ2UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQW5CO0FBQ0FSLEVBQUFBLEtBQUssQ0FBQ0wsUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBTWMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBRjhCLE1BR3RCbUIsS0FIc0IsR0FHWkQsS0FIWSxDQUd0QkMsS0FIc0I7QUFJOUJELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQWpCLEVBQUFBLFlBQVksQ0FBQ2tCLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNELEtBQWpDO0FBQ0FyQixFQUFBQSxJQUFJLENBQUN1QixTQUFMLEdBQWlCLFVBQWpCO0FBQ0FmLEVBQUFBLEtBQUssQ0FBQ0wsUUFBRCxDQUFMO0FBQ0QsQ0FSRDs7QUFVQSxJQUFJRyxTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDa0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNQLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmlja25hbWVcIilcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKVxuXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xuICB3aW5kb3cuc29ja2V0ID0gaW8oXCIvXCIpXG4gIHdpbmRvdy5zb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pXG59XG5cbmlmICghbmlja25hbWUpIHtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VkT3V0XCIpXG59IGVsc2Uge1xuICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2dnZWRJblwiKVxuICBsb2dJbihuaWNrbmFtZSlcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dFxuICBpbnB1dC52YWx1ZSA9IFwiXCJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuaWNrbmFtZVwiLCB2YWx1ZSlcbiAgYm9keS5jbGFzc05hbWUgPSBcImxvZ2dlZEluXCJcbiAgbG9nSW4obmlja25hbWUpXG59XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdClcbn1cbiJdfQ==
},{}]},{},[1])