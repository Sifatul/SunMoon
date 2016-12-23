
	/* setting the position of the  moon/sun into the canvas #### call the  DRAW() method*/



var t=0;
	/* setting the  moon/sun into the canvas #### set the DRAW() method*/
var ashiq=setInterval(function(){draw()},2000);
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');


		
		

function draw()
	{

		
        time=getTime();

		if(time<16) //night part 
		{

			ctx.fillStyle = 'yellow';
	
		}
		else
		{

		ctx.fillStyle = 'white';

		}

		ctx.beginPath();
		ctx.arc(40,30,30,0,2*Math.PI);
		ctx.fill();
		clear(time);


}

function getTime()
{
return t++;
}
