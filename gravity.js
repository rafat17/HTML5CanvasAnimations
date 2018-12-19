var canvas  = document.querySelector('canvas')
var c = canvas.getContext('2d')
canvas.width  = window.innerWidth
canvas.height = window.innerHeight

colorset = [
'red', 'blue', 'orange'
]

function Circle(x, y, dx, dy, radius, colour){
	this.x =x 
	this.y = y
	this.dx = dx
	this.dy = dy
	this.radius = radius
	this.colour = colour

	this.create = function(){
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
		c.fillStyle = this.colour
		c.fill()
		//c.strokeStyle = 'red'
		c.stroke()
		c.closePath()
	}

	this.newmotion = function()
	{

       
        if(this.y + this.radius  + this.dy > canvas.height ){
           this.dy = -this.dy * 0.8 ;
       }
        else{
           	   this.dy += 1

           }

        if(this.x+ this.radius + this.dy > canvas.width || this.x - this.radius <= 0){
       	  this.dx = -this.dx * 0.8

       }


        this.x += this.dx
        this.y += this.dy
        this.create()

	}
}

function randomIntFromRange(bottom, top){
	    
	    top++
	    return Math.floor((Math.random()) * (top-bottom)) + bottom
}

console.log(randomIntFromRange(-2,2))


var allcircles = []

function createallcircles(){
	
	var radius  = 20
    var random_y = randomIntFromRange(0, canvas.height - radius)
    var random_xpos = randomIntFromRange(radius, canvas.width )
	for(var i=0;i< 100; i++){
      var dy  =   randomIntFromRange(-2,2)
	  var random_y = randomIntFromRange(0, canvas.height - radius)
      var random_xpos = randomIntFromRange(radius, canvas.width - radius )
	  var random_dx = randomIntFromRange(-2,2)
	  var colour = colorset[Math.floor(Math.random()*colorset.length)]
	  allcircles.push(new Circle(random_xpos,random_y, random_dx, dy, radius, colour))
		
	}

}

function animate(){
	requestAnimationFrame(animate)
	c.clearRect(0,0, innerWidth, innerHeight)

	for(var i=0; i < allcircles.length ; i++){
		allcircles[i].newmotion()
	}

}

createallcircles()
animate()







