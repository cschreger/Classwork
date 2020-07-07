const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

// const DEFAULTS = {
//     COLOR = #808080,
//     RADIUS = 50
// };

function Asteroid(options) {
    MovingObject.call(this, {
        pos: options["pos"],
        vel: Util.randomVec(7),
        color: 'gray',
        radius: 50,
        game: options["game"]
    });
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;