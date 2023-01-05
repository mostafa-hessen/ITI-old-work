class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;

    if (this.constructor==Shape){
        throw ("error")
    }
  }
}

class Rectangle extends Shape {
    static count=0
  constructor(height, width) {
    super(height, width)
    Rectangle.count++;
  }

  area() {
    return this.height * this.width;
  }
  perimeter() {
    return this.height * this.width * 2;
  }

  toString() {
    return `the height ${this.height} the width ${
      this.width
    }  the area func ${this.area()}  the perimeter func  ${this.perimeter()}   `;
  }
}

// var obj = new Shape(20, 10);
var obj = new Rectangle(20, 10);
var obj1 = new Rectangle(20, 10);
console.log(obj.toString());
console.log(Rectangle.count);

// 2
class Square extends Rectangle {
constructor(){
    super(h,w)
}

}