function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function(){
  return (this.height * this.width)}


  Rectangle.prototype.perimeter = function(){
    return ((this.height * this.width)*2)}



Rectangle.prototype.displayInfo = function(){
  console.log(
    `the height ${this.height} the width ${this.width}  the area func ${this.area()}  the perimeter func  ${this.perimeter()}   ` );}

var p = new Rectangle(10, 20); 
console.log(p);
//  p.displayInfo()