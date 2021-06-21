// let resizeReset = function() {
// 	w = canvasBody.width = window.innerWidth;
// 	h = canvasBody.height = window.innerHeight;
// }

// const opts = { 
// 	particleColor: "rgb(200,200,200)",
// 	lineColor: "rgb(200,200,200)",
// 	particleAmount: 30,
// 	defaultSpeed: 1,
// 	variantSpeed: 1,
// 	defaultRadius: 2,
// 	variantRadius: 2,
// 	linkRadius: 200,
// };

// window.addEventListener("resize", function(){
// 	deBouncer();
// });

// let deBouncer = function() {
//     clearTimeout(tid);
//     tid = setTimeout(function() {
//         resizeReset();
//     }, delay);
// };

// let checkDistance = function(x1, y1, x2, y2){ 
// 	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// };

// let linkPoints = function(point1, hubs){ 
// 	for (let i = 0; i < hubs.length; i++) {
// 		let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
// 		let opacity = 1 - distance / opts.linkRadius;
// 		if (opacity > 0) { 
// 			drawArea.lineWidth = 0.5;
// 			drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
// 			drawArea.beginPath();
// 			drawArea.moveTo(point1.x, point1.y);
// 			drawArea.lineTo(hubs[i].x, hubs[i].y);
// 			drawArea.closePath();
// 			drawArea.stroke();
// 		}
// 	}
// }

// Particle = function(xPos, yPos){ 
// 	this.x = Math.random() * w; 
// 	this.y = Math.random() * h;
// 	this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
// 	this.directionAngle = Math.floor(Math.random() * 360); 
// 	this.color = opts.particleColor;
// 	this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
// 	this.vector = {
// 		x: Math.cos(this.directionAngle) * this.speed,
// 		y: Math.sin(this.directionAngle) * this.speed
// 	};
// 	this.update = function(){ 
// 		this.border(); 
// 		this.x += this.vector.x; 
// 		this.y += this.vector.y; 
// 	};
// 	this.border = function(){ 
// 		if (this.x >= w || this.x <= 0) { 
// 			this.vector.x *= -1;
// 		}
// 		if (this.y >= h || this.y <= 0) {
// 			this.vector.y *= -1;
// 		}
// 		if (this.x > w) this.x = w;
// 		if (this.y > h) this.y = h;
// 		if (this.x < 0) this.x = 0;
// 		if (this.y < 0) this.y = 0;	
// 	};
// 	this.draw = function(){ 
// 		drawArea.beginPath();
// 		drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
// 		drawArea.closePath();
// 		drawArea.fillStyle = this.color;
// 		drawArea.fill();
// 	};
// };

// function setup(){ 
// 	particles = [];
// 	resizeReset();
// 	for (let i = 0; i < opts.particleAmount; i++){
// 		particles.push( new Particle() );
// 	}
// 	window.requestAnimationFrame(loop);
// }

// function loop(){ 
// 	window.requestAnimationFrame(loop);
// 	drawArea.clearRect(0,0,w,h);
// 	for (let i = 0; i < particles.length; i++){
// 		particles[i].update();
// 		particles[i].draw();
// 	}
// 	for (let i = 0; i < particles.length; i++){
// 		linkPoints(particles[i], particles);
// 	}
// }

// const canvasBody = document.getElementById("canvas"),
// drawArea = canvasBody.getContext("2d");
// let delay = 200, tid,
// rgb = opts.lineColor.match(/\d+/g);
// resizeReset();
// setup();

// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

// NOTE: remove the below comments this after you marge the code of the model

/* Legacy code below: getUserMedia 
else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
        video.src = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia({ video: true }, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
    navigator.mozGetUserMedia({ video: true }, function(stream){
        video.srcObject = stream;
        video.play();
    }, errBack);
}
*/

setInterval(function () {
    secondPlay()
}, 1000);


setInterval(function () {
    minutePlay()
}, 10000);


function secondPlay() {
$("body").removeClass("play");
var aa = $("ul.secondPlay li.active");

if (aa.html() == undefined) {
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

}
else if (aa.is(":last-child")) {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}

}

function minutePlay() {
$("body").removeClass("play");
var aa = $("ul.minutePlay li.active");

if (aa.html() == undefined) {
    aa = $("ul.minutePlay li").eq(0);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

}
else if (aa.is(":last-child")) {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.minutePlay li").eq(0);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}

}