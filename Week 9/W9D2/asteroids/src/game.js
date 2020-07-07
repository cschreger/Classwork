const SETTINGS = {
    DIM_X: 1400,
    DIM_Y: 800,
    NUM_ASTEROIDS: 10,
}

function Game() {
    this.asteroids = [],
    this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    for (let i = 0; i < SETTINGS["NUM_ASTEROIDS"]; i++) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}))
    }
}

Game.prototype.randomPosition = function () {
    return [
        Math.floor(Math.random() * SETTINGS["DIM_X"]),
        Math.floor(Math.random() * SETTINGS["DIM_Y"])
    ]
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, SETTINGS["DIM_X"], SETTINGS["DIM_Y"])
    this.asteroids.forEach (function(asteroid){
        asteroid.draw(ctx)
    })
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach (function(asteroid){
        asteroid.move()
    })
}

Game.prototype.wrap = function (pos) {
    let [posX, posY] = pos 
    if (posX > 1400 ) {
        posX = 0;
    } else if (posX < 0) {
        posX = 1400;
    } else if (posY > 800 ) {
        posY = 0;
    } else if (posY < 0) {
        posY = 800;
    }

    return [posX, posY];
}

module.exports = Game;