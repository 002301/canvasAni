import initCanvas from './initCanvas'
let canvas, context, particles, numParticles, minDist, springAmount,
width,height,className

function Gravity(dom){
    canvas = initCanvas(dom);
    context = canvas.getContext('2d');
    className = canvas.parentNode.className
    particles = [],
    numParticles = 60,
    minDist = 80,
    springAmount = 0.1;

    width = canvas.width;
    height = canvas.height;
    // console.log(width,height);
    for (var i = 0; i < numParticles; i++) {
      var color = Math.random()*(0xffffff);
      var size = Math.random() * 3;
      var ball = new Ball(size, "#fff");
      ball.x = Math.random() * width;
      ball.y = Math.random() * height;
      ball.vx = Math.random() * 6 - 3;
      ball.vy = Math.random() * 6 - 3;

      particles.push(ball);
    }
    render();
  console.log(canvas.parentNode.className);
}
function render(){
  context.clearRect(0, 0, width, height);
  particles.forEach((item,index)=>{
    move(item,index);
    draw(item)
  });
  // console.log(canvas.parentNode);
  if (document.querySelector('.' + className)){
    requestAnimationFrame(render);
  }else{del()}
}
function del(){
  canvas=context=null;
  console.log('del')
}
function gravaite(ballA, ballB) {
  var dx = ballB.x - ballA.x;
  var dy = ballB.y - ballA.y;
  var dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < minDist) {
    context.save();
    context.strokeStyle = "rgba(255,255,255,.3)";
    context.beginPath();
    context.moveTo(ballA.x, ballA.y);
    context.lineTo(ballB.x, ballB.y);
    context.closePath();
    context.stroke();
    context.restore();

    var ax = dx * springAmount,
      ay = dy * springAmount;
    ballA.vx += ax;
    ballA.vy += ay;
    ballB.vx -= ax;
    ballB.vy -= ay;
  }
}
function move(ballA, i) {
  ballA.x += ballA.vx/1000;
  ballA.y += ballA.vy/1000;
  if (ballA.x > canvas.width) {
    ballA.x = 0;
  } else if (ballA.x < 0) {
    ballA.x = canvas.width;
  }
  if (ballA.y > canvas.height) {
    ballA.y = 0;
  } else if (ballA.y < 0) {
    ballA.y = canvas.height;
  }

  for (var ballB, j = i + 1; j < numParticles; j++) {
    ballB = particles[j];
    gravaite(ballA, ballB);
  }

}
function draw(ball) {
  ball.draw(context);
}

function Ball(radius, color) {
  if (radius === undefined) { radius = 40; }
  if (color === undefined) { color = '#00ff00'; }
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.radius = radius;
  this.rotation = 0;
  this.mass = 1;
  this.scaleX = 1;
  this.scaleY = 1;
  this.name = "";
  this.color = parseColor(color);
  this.lineWidth = 1;

}

Ball.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.strokeStyle = this.color;
  context.beginPath();
  context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
  context.stroke();
  context.restore();
}

//得到球体的左上角坐标
Ball.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
}
const parseColor = function (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return (color | 0); //chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1);
    }
    return window.parseInt(color, 16);
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
    }
    return color;
  }
};

export { Gravity}