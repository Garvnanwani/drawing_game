(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOGY2ZTE1ZjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIlxuIl19
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var nickname = localStorage.getItem("nickname");

if (!nickname) {
  body.classList.add("loggedOut");
} else {
  body.classList.add("loggedIn");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCOztBQUVBLElBQUksQ0FBQ0YsUUFBTCxFQUFlO0FBQ2JILEVBQUFBLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxHQUFmLENBQW1CLFdBQW5CO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xQLEVBQUFBLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQW5CO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuaWNrbmFtZVwiKVxuXG5pZiAoIW5pY2tuYW1lKSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvZ2dlZE91dFwiKVxufSBlbHNlIHtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VkSW5cIilcbn1cbiJdfQ==
},{}]},{},[1])