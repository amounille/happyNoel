var secret = [83, 84, 65, 82, 84];
var secret2 = [76, 89, 65, 77];
var secret3 = [77, 89, 76, 65];
var pressedKeys = [];

function checkSecret() {
  if (pressedKeys.join() === secret.join()) {
    window.location.href = './memo/index.html'; 
  }
  if (pressedKeys.join() === secret2.join()) {
    window.location.href = './surprise/index.html'; 
  }
  if (pressedKeys.join() === secret3.join()) {
    window.open('./surprise/index.html');
  }
}

document.addEventListener('keydown', function(event) {
  pressedKeys.push(event.keyCode);

  pressedKeys = pressedKeys.slice(-secret.length);

  checkSecret();
})


$(function() {
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var WIDTH = 320;
    var HEIGHT = 320;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    clearCanvas();

    var particles = [];
    for (var i = 0; i < WIDTH; i++) {
        particles.push({
            x: Math.random() * WIDTH,
            y: Math.random() * HEIGHT,
            r: Math.random() * 2 + 1
        })
    }
    
    function draw() {
        clearCanvas();
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();

        for (let i = 0; i < WIDTH; i++) {
            let p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }
    
    function update() {
        for (let i = 0; i < WIDTH; i++) {
            let p = particles[i];
            p.y += p.r;
            if (p.y > canvas.height) {
                particles[i] = {
                    x: Math.random() * canvas.width,
                    y: -10,
                    r: p.r
                };
            }
        }
    }
    var timer = setInterval(draw, 50);

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

})