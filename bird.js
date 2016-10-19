function Bird(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 0;
    this.gravity = 1.5;
    this.sprites = [document.getElementById('bird1'), document.getElementById('bird2'), document.getElementById('bird3')];
    this.currentSprite = 0;
    this.updates = 0;
    this.initControls();
}

Bird.prototype.update = function() {
    this.updates++;
    if (this.updates % 18 === 0)
        this.currentSprite = (this.currentSprite + 1) % this.sprites.length;
    this.speedY += this.gravity;
    this.y += this.speedY;
};

Bird.prototype.render = function(ctx) {
    ctx.drawImage(this.sprites[this.currentSprite], this.x, this.y, 60, 44);
};

Bird.prototype.initControls = function() {
    var self = this;
    window.addEventListener('keydown', function(e) {
        console.log(e.keyCode);
        if (e.keyCode === 32) {
            self.speedY = -20;
        }
    })
};

export default Bird;
