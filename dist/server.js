"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var socketio = _interopRequireWildcard(require("socket.io"));

var _morgan = _interopRequireDefault(require("morgan"));

var _socketController = _interopRequireDefault(require("./socketController"));

var _events = _interopRequireDefault(require("./events"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 3000;
app.set("view engine", "pug");
app.set("views", _path.default.join(__dirname, "views"));
app.use((0, _morgan.default)("dev"));
app.use(_express.default.static(_path.default.join(__dirname, "static")));
app.get("/", function (req, res) {
  res.render("home", {
    events: JSON.stringify(_events.default)
  });
});
var server = app.listen(PORT, function () {
  console.log("Server is running on Port ".concat(PORT));
});
var io = new socketio.Server(server);
io.on("connection", function (socket) {
  return (0, _socketController.default)(socket, io);
});