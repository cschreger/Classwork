console.log("Working")
const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js")
const GameView = require("./game_view.js")

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');
    window.ctx = ctx;
    const gameView = new GameView(ctx);
    gameView.start()
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;

