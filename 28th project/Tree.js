class Tree {
    constructor(x, y, width,length) {
      var options = {
          'isStatic':true
      }
      this.body = Bodies.circle(x, y, width, length,options);
      this.width = width;
  this.image=loadImage("Plucking mangoes/tree.png");
      World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);

    }
  };
  