canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 2;
ctx.rect(150, 150, 500, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(250, 250, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(400, 250, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(550, 250, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(300, 300, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(450, 300, 60, 0, 2 * Math.PI);
ctx.stroke();