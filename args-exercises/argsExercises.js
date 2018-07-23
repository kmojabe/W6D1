function sum(...args) {
  return args.reduce((acc, cur) => acc + cur);
}



Function.prototype.myBind = function(){
  let ctx = arguments[0];
  // let that = this;
  let bindArgs = Array.from(arguments).splice(1,-1);
  return (...callArgs) =>  {
    // let callArgs = Array.from(arguments);
    // debugger;
    this.apply(ctx, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");
//
// markov.says.myBind(breakfast)("meow", "a tree");

function curriedSum(num) {
  // debugger
  let resArr = [];

  function _curriedSum(otherNum) {
    // debugger
    resArr.push(otherNum);
    if (resArr.length === num) {
      return resArr.reduce( (accum, cur) => accum + cur);
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let retArr = [];
  let that = this;
   // debugger;

  function _curry(arg){
    retArr.push(arg);
    if (retArr.length === numArgs) {
      // debugger
      return that.apply(null,retArr);
    } else {
      return _curry;
    }
  }

  return _curry;

};

// markov.says.curry(3)(breakfast)("meow")("tree");
