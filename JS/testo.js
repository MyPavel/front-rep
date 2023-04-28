function Candy(weight){
  this.tasty = 'delicious',
  this.getWeight = function(){
    console.log(`Weight is ${weight} g`)
  }
}

const twix = new Candy(47);
const snickers = new Candy(50);

twix.getWeight()
snickers.getWeight()