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

  rollDice() {
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

loadeDie.load = function(pre) {// can create a method directly off the object
  this.pre = pre;

 let ram =  loadeDie.roll();//still have access to parent methods

  if (!loadeDie.chance) {//checing for a property to the loaded object
    loadeDie.chance = true;
    console.log('again' , loadeDie);
    return this.pre;
  }
  else if (ram == this.pre) {
      console.log('hey')
      return this.load(this.pre)
    }
  else {
      console.log(this.rand);
      loadeDie.chance = false;
      return ram;
    }

};

//-----------------------------------------DOM manipulation

function rollOne() {
   document.getElementById('oneR').innerHTML = 'You rolled a ' + sixDie.roll();
}

function rollCup() {
  let nums = document.getElementById('cups').value;
  let numCups = new Cup(nums);
  document.getElementById('mulR').innerHTML = 'You rolled a total of ' + numCups.rollDice() + ' dice';
  document.getElementById('cups').value = '';
}

function rolload() {
  let num = document.getElementById('load').value;
  document.getElementById('loadR').innerHTML = 'Rolling a loaded ide: ' + loadeDie.load(num) ;
}
