let canvas  = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c  = canvas.getContext('2d')

window.addEventListener('resize', function(){

	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	initialize()

    
})


function Rectangle(x, y, dx, dy, width, height, colour ){

	this.x = x
	this.y = y
	this.dx = dx
	this.dy = dy
	this.width = width
	this.height = height
	this.colour = colour
	hit = 0


	this.draw = function(){

	c.fillStyle = this.colour
	c.fillRect(this.x , this.y, this.width, this.height)
    }   

    this.movecontrols = function(){

    	this.x += this.dx
    	this.y += this.dy

    	if(this.x + this.width > innerWidth){
    		this.x = innerWidth - this.width
    		
    	}

    	if(this.y + this.height > innerHeight){
    		this.y = innerHeight - this.height
    	}

    	if(this.x + this.width == innerWidth){
    		this.dx = -this.dx
    		this.colour = '#ff3333'
    		hit++
    		
    	}

    	else if(this.x < 0){
    		this.dx = Math.abs(this.dx)
    		this.colour = colour
    		hit++
    		
    	}

    	if(this.y + this.height == innerHeight){
    		this.dy = -this.dy
    		this.colour = '#ff3333'
    		hit--
    		
    	}

    	else if(this.y < 0){
    		this.dy = Math.abs(this.dy)
    		this.colour = colour
    		hit++
    		
    	}

    	this.draw()

    } 

}

function initialize(){

rectArray = []
palette = [

'#001f3f',
'#0074d9',
'#7fDbff',
'#01ff70',
'#ff4136',
'#f012be',
'#dddddd',

]

for (let i = 0 ; i < 1000; i++){

	x = Math.random() * canvas.width
	y = Math.random() * canvas.height
	dx = (Math.random() - 2) * 1
	dy = (Math.random() - 2) * 1
	width = 8
	height = 8
	colindex = Math.floor(Math.random() * palette.length)
	colour = palette[colindex]


	rectArray.push(new Rectangle(x, y, dx, dy, width, height, colour))
}

console.log(rectArray)
}

function animate(){

	requestAnimationFrame(animate)

	c.clearRect(0,0, innerWidth, innerHeight)

	for(let i = 0; i < rectArray.length ; i++)
	{
	rectArray[i].movecontrols()
    }
	
}

initialize()
animate()

