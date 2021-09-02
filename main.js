var mouseEvent="empty";
var current_position_of_mouse_x,current_position_of_mouse_y;
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color= "red";
width_of_line=5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
 color = document.getElementById("color").innerHTML.value;
 radius = document.getElementById("radius").innerHTML.value;
 width_of_line = document.getElementById("width").innerHTML.value;
 mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    //mouseEvent="mousemove";
 current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
 current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mouseDown") {
 console.log("Current position of x and y cordinates= ");
 console.log("x = " + current_position_of_mouse_x + "y + " + current_position_of_mouse_y);
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.lineWidth = width_of_line;
 //ctx.moveTo(last_position_of_x,last_position_of_y);
 ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
 //ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
 ctx.stroke();
}
}


