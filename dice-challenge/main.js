
var die = {

  rollOne: function() {
    this.output = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return this.output
  },

  rollMany: function(num) {
    this.num = num;
    this.output = 0
    for(var i = 1; i <= num; i++) {
     var random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      console.log(random);
      this.output += random;
    }
    return this.output;
  },

  chance : 1,

  loaded: function(pre) {
    this.pre = pre;

    this.rand = Math.floor(Math.random() * (6 - 1 + 1)) + 1;



      if(die.chance === 1) {
      die.chance = 0;
      console.log(die.chance)
      return this.pre;
      }

      else {
      if(this.rand === this.pre) {
        console.log('hey')
        return die.loaded(pre)
      }
        else {
        die.chance = 1;
        return this.rand;
      }
      }





  }
}

var dice1 = Object.create(die);

console.log(dice1.loaded(2));
console.log(dice1.loaded(2));
console.log(dice1.loaded(2));
console.log(dice1.loaded(2));
