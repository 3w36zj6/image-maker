var elem = document.getElementById('output');
var hello = 'Hello TypeScript';
if (elem) {
    elem.innerHTML = hello;
}

// Canvas
var canvas = <HTMLCanvasElement> document.getElementById("canvas");
var ctx = canvas.getContext("2d")!;

// Draw
ctx.fillStyle = "Blue";
ctx.fillRect(15, 10, 150, 100);