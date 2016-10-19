function Scene(mw) {
    this.bg = document.getElementById('bg');
    this.xOffSet = 0;
    this.maxWidth = mw;
}

Scene.prototype.update = function() {
    if (this.xOffSet <= -450) this.xOffSet = 0;
    this.xOffSet--;
};

Scene.prototype.render = function(ctx) {
    for (var i = 0; i + this.xOffSet < this.maxWidth + 450; i += 449) {
        ctx.drawImage(this.bg, i + this.xOffSet, 0, 450, 600);
    }
};

export default Scene;
