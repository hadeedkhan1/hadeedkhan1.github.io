function initLidar(){

const showRobot = window.innerWidth >= 768;

const canvas = document.getElementById("lidar-background");

if(!canvas) return;

const ctx = canvas.getContext("2d");

let width;
let height;

function resize(){

    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;

}

resize();

window.addEventListener("resize", resize);

const robot = {

    x: 200 + offsetX,
    y: 250 + offsetY,

    heading: 0,

    speed: 0.8

};

let lidarAngle = 0;

const offsetX = 120;
const offsetY = 80;

const scannedPoints = [];

const robotPath = [];

const positionHistory = [];

function getObstacles(){

return [

{

x:50 + offsetX,
y:50 + offsetY,
width:500,
height:15
},

{
x:180 + offsetX,
y:50 + offsetY,
width:15,
height:180
},

{
x:50 + offsetX,
y:50 + offsety,
width:15,
height:415
},

{
x:535 + offsetX,
y:50 + offsety,
width:15,
height:415
},

{
x:180 + offsetX,
y:50 + offsety,
width:15,
height:180
},

{
x:300 + offsetX,
y:180 + offsety,
width:160,
height:15
},

{
x:400 + offsetX,
y:180 + offsety,
width:15,
height:150
},

{
x:120 + offsetX,
y:330 + offsety,
width:180,
height:15
},

{
x:120 + offsetX,
y:330 + offsety,
width:15,
height:100
}

];

}

function checkCollision(x,y,obstacles){

const size = 20;

for(let wall of obstacles){

if(

x + size > wall.x &&
x - size < wall.x + wall.width &&
y + size > wall.y &&
y - size < wall.y + wall.height

){

return true;

}

}

return false;

}

function castRay(angle, obstacles){

let distance = 0;

while(distance < 280){

let x =
robot.x +
Math.cos(angle) * distance;

let y =
robot.y +
Math.sin(angle) * distance;

for(let wall of obstacles){

if(

x > wall.x &&
x < wall.x + wall.width &&
y > wall.y &&
y < wall.y + wall.height

){

return {

x:x,
y:y,
distance:distance

};

}

}

distance += 2;

}

return null;

}

function draw(){

ctx.clearRect(
0,
0,
width,
height
);

const obstacles = getObstacles();

const front =
castRay(
robot.heading,
obstacles
);

const left =
castRay(
robot.heading - Math.PI/4,
obstacles
);

const right =
castRay(
robot.heading + Math.PI/4,
obstacles
);

if(front && front.distance < 50){

    const leftDistance =
    left ? left.distance : 280;

    const rightDistance =
    right ? right.distance : 280;

    robot.heading +=
    leftDistance > rightDistance
    ? -Math.PI/4
    : Math.PI/4;

}

let nextX =
robot.x +
Math.cos(robot.heading) *
robot.speed;

let nextY =
robot.y +
Math.sin(robot.heading) *
robot.speed;

if(!checkCollision(nextX,nextY,obstacles)){

robot.x = nextX;
robot.y = nextY;

}
else{

robot.x -=
Math.cos(robot.heading) * 20;

robot.y -=
Math.sin(robot.heading) * 20;

robot.heading +=
(Math.PI / 2) +
(Math.random() * Math.PI);

}

positionHistory.push({
    x: robot.x,
    y: robot.y
});

if(positionHistory.length > 120){
    positionHistory.shift();
}

if(positionHistory.length === 120){

    const first = positionHistory[0];

    const distance =
    Math.hypot(
        robot.x - first.x,
        robot.y - first.y
    );

    if(distance < 60){

        robot.heading += Math.PI;

        positionHistory.length = 0;

    }

}


if(Math.random() < 0.008){

robot.heading +=
(Math.random() - 0.5);

}

robotPath.push({

x: robot.x,
y: robot.y

});

if(robotPath.length > 400){

robotPath.shift();

}

lidarAngle += 0.05;

for(let i=0;i<12;i++){

let rayAngle =
lidarAngle +
(i * 0.025);

let hit =
castRay(
rayAngle,
obstacles
);

if(hit){

scannedPoints.push({

x: hit.x,
y: hit.y,
created: Date.now()

});

}

}

const now = Date.now();

for(let i=scannedPoints.length-1;i>=0;i--){

if(now - scannedPoints[i].created > 12000){

scannedPoints.splice(i,1);

}

}

ctx.beginPath();

robotPath.forEach((point,index)=>{

if(index === 0){

ctx.moveTo(
point.x,
point.y
);

}
else{

ctx.lineTo(
point.x,
point.y
);

}

});

ctx.strokeStyle =
"rgba(107,171,79,0.3)";

ctx.lineWidth = 2;

ctx.stroke();

scannedPoints.forEach(point=>{

const age =
(now - point.created) / 12000;

const opacity =
Math.max(
0.0,
1 - age
);

ctx.beginPath();

ctx.arc(
point.x,
point.y,
2,
0,
Math.PI * 2
);

ctx.fillStyle =
`rgba(107,171,79,${opacity})`;

ctx.fill();

});

if(showRobot){

ctx.save();

ctx.translate(
robot.x,
robot.y
);

ctx.rotate(
robot.heading
);

ctx.fillStyle =
"#0C343D";

ctx.beginPath();

ctx.roundRect(
-28,
-20,
56,
40,
10
);

ctx.fill();

ctx.fillStyle =
"#222";

ctx.fillRect(
-32,
-16,
7,
14
);

ctx.fillRect(
25,
-16,
7,
14
);

ctx.fillStyle =
"#6BAB4F";

ctx.fillRect(
20,
-5,
10,
10
);

ctx.restore();

ctx.save();

ctx.translate(
robot.x,
robot.y
);

ctx.rotate(
lidarAngle
);

ctx.beginPath();

ctx.arc(
0,
0,
12,
0,
Math.PI * 2
);

ctx.fillStyle =
"#67B2D8";

ctx.fill();

ctx.beginPath();

ctx.moveTo(
0,
0
);

ctx.lineTo(
16,
0
);

ctx.strokeStyle =
"#ffffff";

ctx.lineWidth = 3;

ctx.stroke();

ctx.restore();

}

ctx.beginPath();

ctx.moveTo(
robot.x,
robot.y
);

ctx.arc(
robot.x,
robot.y,
220,
lidarAngle - 0.15,
lidarAngle + 0.15
);

ctx.closePath();

ctx.fillStyle =
"rgba(103,178,216,0.12)";

ctx.fill();

ctx.beginPath();

ctx.moveTo(
robot.x,
robot.y
);

ctx.lineTo(
robot.x +
Math.cos(lidarAngle) * 260,
robot.y +
Math.sin(lidarAngle) * 260
);

ctx.strokeStyle =
"rgba(103,178,216,0.8)";

ctx.lineWidth = 2;

ctx.stroke();

const hudX =
width - 220;

ctx.font =
"14px monospace";

ctx.fillStyle =
"#67B2D8";

ctx.fillText(
"MAPPING ACTIVATED",
hudX,
40
);

ctx.fillText(
"LIDAR: ONLINE",
hudX,
60
);

ctx.fillText(
`POSE X: ${Math.round(robot.x)}`,
hudX,
90
);

ctx.fillText(
`POSE Y: ${Math.round(robot.y)}`,
hudX,
110
);

ctx.fillText(
`YAW: ${Math.round((robot.heading * 180 / Math.PI) % 360)}°`,
hudX,
130
);

ctx.fillText(
`POINTS: ${scannedPoints.length}`,
hudX,
150
);

ctx.fillText(
"BATTERY: 92%",
hudX,
170
);

requestAnimationFrame(draw);

}

draw();

}
