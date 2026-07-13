function initLidar(){

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



// =======================
// ROBOT STATE
// =======================

const robot = {

    x: 200,
    y: 250,

    heading: 0,

    speed: 0.8

};


// independent LiDAR rotation

let lidarAngle = 0;


const scannedPoints = [];





// =======================
// MAP ENVIRONMENT
// =======================

function getObstacles(){

return [

{
x:50,
y:50,
width:500,
height:15
},

{
x:50,
y:450,
width:500,
height:15
},

{
x:50,
y:50,
width:15,
height:415
},

{
x:535,
y:50,
width:15,
height:415
},



{
x:180,
y:50,
width:15,
height:180
},


{
x:300,
y:180,
width:160,
height:15
},


{
x:400,
y:180,
width:15,
height:150
},


{
x:120,
y:330,
width:180,
height:15
},


{
x:120,
y:330,
width:15,
height:100
}

];


}







// =======================
// COLLISION
// =======================

function checkCollision(x,y,obstacles){

const size = 20;


for(let wall of obstacles){


if(

x+size > wall.x &&
x-size < wall.x+wall.width &&
y+size > wall.y &&
y-size < wall.y+wall.height

){

return true;

}


}


return false;

}







// =======================
// LIDAR RAYCAST
// =======================

function castRay(angle, obstacles){


let distance = 0;


while(distance < 280){


let x =
robot.x +
Math.cos(angle)*distance;


let y =
robot.y +
Math.sin(angle)*distance;



for(let wall of obstacles){


if(

x > wall.x &&
x < wall.x+wall.width &&
y > wall.y &&
y < wall.y+wall.height

){


return {

x:x,
y:y

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



const obstacles =
getObstacles();





// =======================
// ROBOT MOVEMENT
// =======================


let nextX =
robot.x +
Math.cos(robot.heading)
*
robot.speed;


let nextY =
robot.y +
Math.sin(robot.heading)
*
robot.speed;



if(!checkCollision(nextX,nextY,obstacles)){


robot.x = nextX;
robot.y = nextY;


}
else{


robot.heading += Math.PI/2;


}



if(Math.random()<0.008){

robot.heading +=
(Math.random()-0.5);

}








// =======================
// LIDAR ROTATION
// =======================


lidarAngle += 0.05;






// =======================
// SCAN
// =======================


for(let i=0;i<12;i++){


let rayAngle =
lidarAngle +
(i*0.025);



let hit =
castRay(
rayAngle,
obstacles
);



if(hit){

scannedPoints.push(hit);

}


}



if(scannedPoints.length>5000){

scannedPoints.splice(
0,
500
);

}








// =======================
// DRAW MAP
// =======================


scannedPoints.forEach(point=>{


ctx.beginPath();


ctx.arc(
point.x,
point.y,
2,
0,
Math.PI*2
);


ctx.fillStyle =
"#6BAB4F";


ctx.fill();


});







// =======================
// DRAW ROBOT
// =======================


ctx.save();


ctx.translate(
robot.x,
robot.y
);


ctx.rotate(
robot.heading
);



// chassis

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



// wheels

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




// front LED

ctx.fillStyle =
"#6BAB4F";


ctx.fillRect(
20,
-5,
10,
10
);



// lidar tower

ctx.fillStyle =
"#67B2D8";


ctx.beginPath();

ctx.arc(
0,
-25,
10,
0,
Math.PI*2
);


ctx.fill();



ctx.restore();







// =======================
// LIDAR SCAN CONE
// =======================


ctx.beginPath();


ctx.moveTo(
robot.x,
robot.y
);



ctx.arc(

robot.x,
robot.y,

220,

lidarAngle-0.15,

lidarAngle+0.15

);


ctx.closePath();



ctx.fillStyle =
"rgba(103,178,216,0.12)";


ctx.fill();





// actual beam


ctx.beginPath();


ctx.moveTo(
robot.x,
robot.y
);


ctx.lineTo(

robot.x+
Math.cos(lidarAngle)*260,

robot.y+
Math.sin(lidarAngle)*260

);



ctx.strokeStyle =
"rgba(103,178,216,0.8)";


ctx.lineWidth=2;


ctx.stroke();









// =======================
// HUD
// =======================


const hudX =
width-220;


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
"LIDAR: 360 DEG",
hudX,
60
);


ctx.fillText(
"SCAN: ACTIVE",
hudX,
80
);


ctx.fillText(
"POINTS: "+scannedPoints.length,
hudX,
100
);







requestAnimationFrame(draw);


}



draw();


}