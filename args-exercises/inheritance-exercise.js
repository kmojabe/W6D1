Function.prototype.inherits = function (otherObject) {
  // function Surrogate(){}
  // Surrogate.prototype = otherObject.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
  this.prototype = Object.create(otherObject.prototype);
  this.prototype.constructor = this;



};

function MovingObject () {}

MovingObject.prototype.move = () => {
  console.log("move");
};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.fly = () => {
  console.log("fly");
};



let mv = new MovingObject();
let ship = new Ship();
let as = new Asteroid();
