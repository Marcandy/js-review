class Die {
  constructor(sides) {
    this.sides = sides || 6; //default 6
    this.rand = 0;
    // this.roll = this.roll.bind(this);
  }

  roll() {
    this.rand = Math.floor(Math.random() * this.sides) + 1;
    return this.rand
  }
}

let sixDie = new Die(6);



class Cup extends Die {
  constructor(dice, sides, rand) {
    super(sides, rand);
  this.numDice = dice;
  this.sum = 0;

  }

  rollDice(){
    for (let i = 1; i <= this.numDice; i++) {
      console.log(this.rand) //it access rand from parent class
      this.sum += super.roll();

    }
    return this.sum;
  }
}

let cupTen = new Cup(10);
cupTen.rollDice();

let loadeDie = new Die();

loadeDie.load = function(pre){
    this.pre = pre;

    loadeDie.roll();

      if(!loadeDie.chance) {

      loadeDie.chance = true;
      return this.pre;
      }
      else {
      if(this.rand === this.pre) {
        console.log('hey')
        return loadeDie.load(pre)
      }
        else {
        loadeDie.chance = false;
        return loadeDie.rand;
      }
      }
};

console.log(loadeDie.load(5));
console.log(loadeDie.load(5));
console.log(loadeDie.load(5));
console.log(loadeDie.load(5));
console.log(loadeDie);
