let j;
function setup() {
  // put setup code here
  createCanvas(400,400)
  j=0;
}

function draw() {
  // put drawing code here
  background(200)
  strokeWeight(1)
  point(200,100)
  line(0,0,200,100)

  fill(70,130,180)
  strokeWeight(0)
  rect(150,20,20,100)
  ellipse(150,80,20,20)
  triangle(20,20,40,40,60,20)
  arc(70,50,40,40,radians(0), radians(270))

  strokeJoin(ROUND)
  strokeWeight(5)
  beginShape()
  vertex(350,200)
  vertex(200,180)
  vertex(180,150)
  vertex(150,120)
  endShape(close)

  for (var i=1; i<=400; i++){
    x=i
    y=300+ 20*Math.sin(PI*x/20)
    point(x,y)
  }
  var y=200+20*Math.sin(PI*j/20)
  var r=50+10*Math.sin(PI*j/20)
  j+=1
  ellipse(100,y,r,r)
}