class Shape {
    constructor(height, width) {
      this.height = height;
      this.width = width;
  
      if (this.constructor==Shape){
          throw ("error")
      }
    }

    toString() {
      return `the height ${this.height} the width ${
        this.width
      }  the area func ${this.area()} }   `;
    }
  }
  


  class Rectangle extends Shape {
    constructor(height, width) {
      super(height, width)
    }
  
    area() {
      return this.height * this.width;
    }
  }
  


  class Square extends Rectangle {
    constructor(height, width) {
      super(height, width)
    }
  
    area() {
      return (this.height * this.width)*2;
    }
  }

  
  class Circle extends Rectangle {
    constructor(height, width) {
      super(height, width)
      this.radius=height
    }
  
    area() {
      return 2*Math.PI*this.radius;
    }
  }





  // var obj = new Shape(20, 10);
  var obj = new Rectangle(20, 10);
  console.log(obj.toString());

  var obj1 = new Square(50, 10);
  console.log(obj1.toString());
  

  var obj2 = new Circle(5);
  console.log(obj2.toString());
 


  