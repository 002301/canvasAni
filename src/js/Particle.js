import initCanvas from './initCanvas'
const OPTIONS = {
  AMOUNT: 40,
  UPPER_LIMIT: 5,
  LOWER_LIMIT: 1
};

const UPPER_SIZE = 10;
const LOWER_SIZE = 4;

class Particle {
  canvas;
  context;
  particles;
  FRAME_COUNT = 0;
  timer;
  className 
  constructor(dom) {
    this.canvas = initCanvas(dom);
    this.className = this.canvas.parentNode.className
    this.init();
  }
  init() {
    this.context = this.canvas.getContext('2d');
    this.particles = this.genParticles();
    this.draw();
  }
  genParticles() {
    return new Array(OPTIONS.AMOUNT).fill({}).map((p) => {
      const size = floored(UPPER_SIZE) + LOWER_SIZE;
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');
      const r = Math.PI / 180 * floored(360);
      const color = 'rgba(255,' + (100 + Math.floor(Math.random() * 70)) + ', 0, ' + Math.random() + ')';
      const xDelayed = doIt();
      const startX = xDelayed ? -(size + floored(this.canvas.width)) : floored(this.canvas.width * 0.25);
      const startY = xDelayed ? size + floored(this.canvas.height * 0.25) + Math.floor(this.canvas.height * 0.75) : this.canvas.height + size + floored(this.canvas.height);
      c.height = size;
      c.width = size;
      this.context.globalCompositeOperation = 'multiply';
      // ctx.filter = `blur(${Math.random() * size}px)`
      ctx.translate(size / 2, size / 2);
      ctx.rotate(r);
      ctx.translate(-(size / 2), -(size / 2));
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, size, size);
      return {
        x: startX,
        y: startY,
        startY: startY,
        startX: startX,
        c: c,
        r: r,
        vx: floored(OPTIONS.UPPER_LIMIT / 4),
        vy: floored(OPTIONS.UPPER_LIMIT / 4),
        size: size
      };
    });
  }
  draw() {
    let _iteratorNormalCompletion = true;
    let _didIteratorError = false;
    let _iteratorError = undefined;
    let _iterator = this.particles[Symbol.iterator](), _step;
    try {
      for (; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        const particle = _step.value;

        this.context.clearRect(particle.x, particle.y, particle.size, particle.size);
        this.FRAME_COUNT++;
        if (particle.y < this.canvas.height || particle.startX < 0) particle.x += particle.vx;
        if (particle.x > 0 || particle.startY > this.canvas.height) particle.y -= particle.vy;
        if (this.FRAME_COUNT % 11 === 0 && doIt()) particle.vx = update(particle.vx);
        if (this.FRAME_COUNT % 13 === 0 && doIt()) particle.vy = update(particle.vy);
        this.context.drawImage(particle.c, particle.x, particle.y);
        if (particle.x > this.canvas.width || particle.y < -particle.size) reset(particle);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    this.timer = requestAnimationFrame(() => {
      if (document.querySelector('.' + this.className)) {
          this.draw();
      } else { this.destory() }
      })
  }
  destory() {
    console.log('del')
    window.cancelAnimationFrame(this.timer);
    this.canvas =this.context = null;
  }
}

function doIt() {
  return Math.random() > 0.5;
}
function update(p) {
  return doIt() ? Math.max(OPTIONS.LOWER_LIMIT, p - 1) : Math.min(p + 1, OPTIONS.UPPER_LIMIT);
}
function reset(p) {
  p.x = p.startX;
  p.y = p.startY;
}
function floored(r) {
  return Math.floor(Math.random() * r);
}
export { Particle }