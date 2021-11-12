var arriba = 0; // Variable para diferentes posiciones
var counter= 0;  // contador que agregara circulo uno por uno
var maxBall = 10;  // cantidad de circulos que vamos a colocar
var separation = 55; // separación entre las bolas

var balls = [];

var minSpeed = 20;
var maxSpeed = 50;

var leftLimit = 0;
var rightLimit = 500;

while(counter < maxBall){
    arriba = counter * separation;
    //createPos(0, arriba);
    let randomSpeed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) +minSpeed;
    balls.push({x:0 , y:arriba, speed: randomSpeed , name: 'ball' + counter});
    counter++;
}

var howManyBalls = balls.length;

for(var i = 0 ; i < howManyBalls ; i++){
    let ball = balls[i];
    createPos(ball.x, ball.y , i);
}


//var ballss = document.getEleme

function Mover(div){
    //console.log(div.name);
    let ball = document.getElementById(div.name);
    console.log(ball.style.left + ' '+  div.x + ' ' +  div.speed);
  if( div.x >= '500' || div.x < '0'){
    
        div.speed = div.speed * -1;

        let r = Math.floor(255*(Math.random()));
        let g = Math.floor(255*(Math.random()));
        let b = Math.floor(255*(Math.random()));
        let color =  'rgb(' + r + ', ' + g + ', ' + b + ')';
        ball.style.background = color;

       // let size = Math.floor(Math.random() * (maxSize - minSize + 1)) +minSize;
       // div.style.width = size + 'px';
       // div.style.height = size + 'px';
       
  }


  div.x = div.x + div.speed;
  ball.style.left = div.x + 'px';

  console.log(ball.style.left + ' '+  div.x + ' ' +  div.speed);
}


/*
setInterval(function(){Mover(balls[0])}, 100);
setInterval(function(){Mover(balls[1])}, 100);
setInterval(function(){Mover(balls[2])}, 100);
setInterval(function(){Mover(balls[3])}, 100);
setInterval(function(){Mover(balls[4])}, 100);
setInterval(function(){Mover(balls[5])}, 100);
setInterval(function(){Mover(balls[6])}, 100);
setInterval(function(){Mover(balls[7])}, 100);
*/
for(var i = 0; i < howManyBalls ; i++){

(function(i) {
    setInterval(function(){Mover(balls[i])}, 100);
}

)(i);

    //setInterval(function(){Mover(balls[i])}, 100);
}

