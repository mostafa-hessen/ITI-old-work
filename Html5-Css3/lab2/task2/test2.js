let fillColor = document.getElementById("fillColor");
let strokeColor = document.getElementById("strokeColor");
let square = document.querySelector(".react");
let circle = document.querySelector(".circl");
let line = document.querySelector(".lineStright");
let eraser = document.querySelector(".eraser");

let colorOfShap = "red";
let colorOfStrok = "blue";
let gameCanvas = document.getElementById("gameCanvas");
let ctx = gameCanvas.getContext("2d");


//  fill color function
fillColor.addEventListener("change", (e) => {
    console.log("dlkj");
    colorOfShap = e.target.value;
  });

  

//   fill stroke gun

strokeColor.addEventListener("change", (e) => {
    console.log("dlkj");
    colorOfStrok = e.target.value;
  });
  
 

//   squar
function squarFun(color,stroke) {
  // set our config variables

 
  // filled square X: 125, Y: 35, width/height 50
  ctx.fillRect(125, 35, 50, 30);

   // fill style
   ctx.fillStyle=color

}

// circle

function circleFun(color,stroke) {
  // circle
  ctx.beginPath();
  // ctx.fillStyle = 'blue'
  ctx.arc(70, 75, 30, 0, 2 * Math.PI);
  ctx.strokeStyle = stroke;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();


}

// line
function lineFun(color) {
  // line
  ctx.beginPath();
  ctx.moveTo(30, 90);
  ctx.lineTo(100, 130);
  ctx.strokeStyle = color;
  ctx.stroke();
}



// eraser

function eraserFun(){
   console.log('fc');
   ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);


}
square.addEventListener("click", () => squarFun(colorOfShap,colorOfStrok));
circle.addEventListener("click", () => circleFun(colorOfShap,colorOfStrok));
line.addEventListener("click", () => lineFun(colorOfShap));
eraser.addEventListener('click',()=>eraserFun())
// https://www.google.com/maps/@${28.1241654},${30.7277044}