var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable

//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.formURL("golf-h1.png", function(Img) {
		hole_obj = Image;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.formURL("ball.png", function(Img) {
		ball_obj = Image;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Have Hit The Goal!!!!!!!!!Lets Goooo!!! You Are So Good!!!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >5)
		{
			ball_y = ball_y = block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up Arrow Key Is Pressed, X = " + ball_x + ", Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y = block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down Arrow Key Is Pressed, X = " + ball_x + ", Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x = block_image_width;
			console.log("block image wisth = " + block_image_width);
			console.log("When Left Arrow Key Is Pressed, Y = " +ball_y+ ", X = " +ball_x);
			canvas.remove(ball_obj);
			new_image();	
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x = block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right Arrow Key Is Pressed, Y = " +ball_y+ ", X = " +ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

