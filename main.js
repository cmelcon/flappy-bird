const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const bg = document.getElementById('bg');
const pipes = [];

import Scene from './scene.js';
import Bird from './bird.js';
import Pipe from './pipe.js';
import generatePipe from './pipe-generator';

ctx.strokeRect(50, 100, 150, 25);

window.onload = function() {
    let player = new Bird(455, 270);
    let scene = new Scene(1000);
    setInterval(generatePipe, 3000, pipes);

    function initGameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        scene.update();
        scene.render(ctx);
        player.update();
        player.render(ctx);
        pipes.forEach(function(pipe, i) {
            if (pipe.x < -pipe.width) {
                delete pipes[i];
            } else {
                pipe.update();
                pipe.render(ctx);
            }
        })
        window.requestAnimationFrame(initGameLoop);
    }
    initGameLoop();
}
