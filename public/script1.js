/**
 * Created by digvijay on 15/10/17.
 */
var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');
console.log("hi")
var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;
console.log(maxX)
console.log(maxY)
function handleOrientation(event) {
    var x = event.beta;  // In degree in the range [-180,180]
    var y = event.gamma; // In degree in the range [-90,90]

    // output.innerHTML  = "beta : " + x + "\n";
    // output.innerHTML += "gamma: " + y + "\n";
    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x >  90) { x =  90};
    if (x < -90) { x = -90};
    x=-x;
    y=-y;
    // To make computation easier we shift the range of
    // x and y to [0,180]
    x += 90;
    y += 90;

    // 10 is half the size of the ball
    // It center the positioning point to the center of the ball
    ball.style.top  = (maxX*x/180-10) + "px";
    ball.style.left = (maxY*y/180-10) + "px";
    garden.style.transform="rotateX("+(45-x)*0.75+"deg) rotateY("+(y-90)*0.75+"deg)";
    // garden.style.height=x+20+"px";
    // output.innerHTML += "current-pos:" + (maxX*x/180-10) + "\n";
    // output.innerHTML += "current-pos:" + (maxY*y/180-10) + "\n";
    // output.innerHTML += "garden:" + garden.style.height + "\n";
    // output.innerHTML += "garden:" + ball.style + "\n";

}

window.addEventListener('deviceorientation', handleOrientation);
