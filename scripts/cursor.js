const LINE_DURATION = 2;
const LINE_WIDTH_START = 5;

$(document).ready(function() {
  enableDrawingCanvas();
  resizeCanvas(window.innerWidth, window.innerHeight);
});


var active = true;
var canvas, context;
var spread = 2;
var lineDuration = LINE_DURATION;
var lineWidthStart = LINE_WIDTH_START;
var drawEveryFrame = 1;
var frame = 0;
var flipNext = true;
var points = [];


//////////////////////////////////////
function enableDrawingCanvas() {
  canvas = document.getElementById('myCanvas');
  context = canvas.getContext('2d');
  enableListeners();
  draw();
}

function draw() {
  if (active) {
    animatePoints();
      requestAnimFrame(draw);
  }
}

function animatePoints() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  var duration = lineDuration * 1000 / 60;
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    point.lifetime += 1;
    if (point.lifetime > duration) {
      points.splice(i, 1);
      continue;
    }
    var inc = (point.lifetime / duration);
    var dec = 1 - inc;
    var spreadRate = spread === 1 ? lineWidthStart / (point.lifetime * 2) : lineWidthStart * (1 - inc);
    context.lineWidth = spreadRate;
    context.strokeStyle = 'rgb(' + Math.floor(245 - (45 * inc)) + ',' + Math.floor(233 - (185 * dec)) + ',' + Math.floor(37 - (145 * inc)) + ')';
    var lastPoint = points[i - 1] || point;
    var distance = Point.distance(lastPoint, point);
    var midpoint = Point.midPoint(lastPoint, point);
    var angle = Point.angle(lastPoint, point);
     context.beginPath();
    context.arc(midpoint.x, midpoint.y, distance / 2, angle, (angle + Math.PI), point.flip);
    context.stroke();
    context.closePath();
  }
}

function addPoint(x, y) {
  flipNext = !flipNext;
  points.push(new Point(x, y, 0, flipNext));
}

requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function resizeCanvas(w, h) {
  context.canvas.width = w;
  context.canvas.height = h;
}

function enableListeners() {
  $('#myCanvas').on('mousemove', function(e) {
    if (frame === drawEveryFrame) {
      addPoint(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      frame = 0;
    }
    frame++;
  });
}

class Point {
  constructor(x, y, lifetime, flip) {
    this.x = x;
    this.y = y;
    this.lifetime = lifetime;
    this.flip = flip;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  static midPoint(a, b) {
    const mx = a.x + (b.x - a.x) * 0.5;
    const my = a.y + (b.y - a.y) * 0.5;
    return new Point(mx, my);
  }

  static angle(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.atan2(dy, dx);
  }
}