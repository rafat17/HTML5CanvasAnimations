var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d'); // imports the contents for canvas drawing for 2d shapes

var mouse = {

	x: undefined,
	y: undefined
}

window.addEventListener('mousemove', 
	function(event){

		mouse.x = event.x;
		mouse.y = event.y;

})


window.addEventListener('resize', function(){

	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

})




var maxradius  = 25;
//var minradius  = 8;
var colorsetArray = [
'#ffaa33',
'#99ffaa',
'#00ff00',
'#4411aa',
'#ff1100',
];


function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minradius = radius;
	this.colour = colorsetArray[Math.floor(Math.random() * colorsetArray.length)];

	this.draw = function() 
	{
		//console.log('this is a test');

	c.beginPath();
    c.arc(this.x,this.y,this.radius,0, Math.PI*2, false);// c.arc(x,y, startAngle, endAngle, drawCounterClockwise: Bool(true/false))
   
    c.fillStyle = this.colour;
    c.fill();
    c.strokeStyle = 'white';
    c.stroke();
	}

	this.update = function()
	{
		if(this.x + this.radius > innerWidth){

	        this.dx = -this.dx;

          }
        else if(this.x - this.radius < 0){
	        this.dx = Math.abs(this.dx);
          }

        if(this.y + this.radius > innerHeight){
	        this.dy = -this.dy;
          }

        else if(this.y - this.radius < 0){
	        this.dy = Math.abs(this.dy);
          }

          this.x += this.dx;
          this.y +=this.dy;


          //all the mousemove interactions dealt with in here

          if((mouse.x - this.x  < 50) && (mouse.x - this.x > -50) && (mouse.y - this.y < 50) && (mouse.y - this.y > -50)){

          	if(this.radius < maxradius )
          	{
          	this.radius +=1;
            }
          }
          else if(this.radius > this.minradius){

          	this.radius -=1;
          }



          this.draw();



	}
}


var circleArray = [];

function init(){
	

	circleArray = [];

	for(var i =0; i < 600; i++){

    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var radius = Math.random() * 3 + 3;
    var dx = (Math.random() - 0.5) * 0.5;
    var dy = (Math.random() - 0.5) * 0.5;
   // var rainbow = colorsetArray[Math.floor(Math.random() * colorsetArray.length)];
    circleArray.push(new Circle(x, y, dx, dy, radius));


	//var circle = new Circle(200,200,3,3,30);


}

}



function animate() {

	requestAnimationFrame(animate);

c.clearRect(0,0,innerWidth,innerHeight);

for(var i=0; i< circleArray.length; i++){

	circleArray[i].update();
}




}

init(); 
animate();





