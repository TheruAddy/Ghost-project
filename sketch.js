var ghost
var ghost_running


function preload() {
ghost_running = loadAnimation("ghost1.png","ghost2.png","ghost3.png")
}

function setup(){
createCanvas(400,400)
//creating ghost
ghost = createSprite(200,200,20,20)
ghost.addAnimation("running",ghost_running)
ghost.scale = 0.5
}

function draw(){
    background("black")


  drawSprites()
}