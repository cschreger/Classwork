function MovingObject(options) {
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
    this.game = options["game"];
}

MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();   
}

MovingObject.prototype.move = function () {
    const velx = this.vel[0]
    const vely = this.vel[1]
    this.pos[0] += velx
    this.pos[1] += vely
    this.pos = this.game.wrap(this.pos);
}

console.log("Hello!")

module.exports = MovingObject; 