var ball = {
  x : 50,
  y : 200,
  radius : 20,
  xSpeed : 5,
  color : ["red","green","blue"]
};

var ball1 = {
  x : 400,
  y : 300,
  radius : 20,
  xSpeed : -5,
  color : ["red","green","blue"]
};

function setup(){
  createCanvas(600,600);
}
//1st param is the x
//2nd param is y
function draw(){
  background("white");
 ball.x += ball.xSpeed;
 ball1.x +=ball1.xSpeed;
 fill(ball.color[1])
  ellipse(ball.x , ball.y , ball.radius , ball.radius);
fill(ball1.color[2])
  ellipse(ball1.x , ball1.y , ball1.radius , ball1.radius);
}