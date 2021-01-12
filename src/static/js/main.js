(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzk0M2RmMjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIlxuIl19
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var nickname = localStorage.getItem("nickname");
var loginForm = document.getElementById("jsLogin");

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = document.querySelector("input");
  var value = input.value;
  localStorage.setItem("nickname", value);
  input.value = "";
};

if (!nickname) {
  body.classList.add("loggedOut");
} else {
  body.classList.add("loggedIn");
}

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFGOEIsTUFHdEJVLEtBSHNCLEdBR1pELEtBSFksQ0FHdEJDLEtBSHNCO0FBSTlCUixFQUFBQSxZQUFZLENBQUNTLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNELEtBQWpDO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDRCxDQU5EOztBQVFBLElBQUksQ0FBQ1QsUUFBTCxFQUFlO0FBQ2JILEVBQUFBLElBQUksQ0FBQ2MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFdBQW5CO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xmLEVBQUFBLElBQUksQ0FBQ2MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQW5CO0FBQ0Q7O0FBRUQsSUFBSVQsU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ1UsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNSLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmlja25hbWVcIilcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmlja25hbWVcIiwgdmFsdWUpXG4gIGlucHV0LnZhbHVlID0gXCJcIlxufVxuXG5pZiAoIW5pY2tuYW1lKSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvZ2dlZE91dFwiKVxufSBlbHNlIHtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VkSW5cIilcbn1cblxuaWYgKGxvZ2luRm9ybSkge1xuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KVxufVxuIl19
},{}]},{},[1])