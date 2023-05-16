function Device(name, power, plugged) {
    this.name = name;
    this.power = power;
    this.plugged = plugged;
 
  }
    

  
  function Phone(name, power, plugged, diagonal) {
    this.name = name;
    this.power = power;
    this.plugged = plugged;
    this.showPower = function(){
      console.log(name + ': Мощность: ' + power + ' Ватт')
    }
    this.showDiag = function(){
        console.log(name + ': Диагональ: ' + diagonal)
      }
  }

  function Laptop(name, power, plugged, weight) {
    this.name = name;
    this.power = power;
    this.plugged = plugged;
    this.weight = weight;
    this.showPower = function(){
      console.log(name + ': Мощность: ' + power + ' Ватт')
    }
    this.showWeight = function(){
        console.log(name + ': Вес: ' + weight)
      }
  }
    
  function Monitor(name, power, plugged, diagonal) {
    this.name = name;
    this.power = power;
    this.plugged = plugged;
    this.showPower = function(){
      console.log(name + ': Мощность: ' + power + ' Ватт')
    }
    this.showDiag = function(){
        console.log(name + ': Диагональ: ' + diagonal)
      }
  }

  Phone.prototype = new Device();
  Laptop.prototype = new Device();
  Monitor.prototype = new Device();
    
  
  let sumPower = function(){
      let sum = 0;
     for(let value of Devices){
      if (value.plugged){
          sum += value.power;
      }else{
          sum;
      }
    }
    return sum;
  }
  
  
  const lamp = new Device("Artstyle", 200, plugged = true);
  const macbook = new Laptop("Macbook", 130, plugged = true, 2000);
  const iphone = new Phone("iphone 13", 200, plugged = true, 6);
  const lcd = new Monitor("HP 24", 10, plugged = false, 24);
  let Devices = [macbook, iphone, lcd, lamp];
  
  
  console.log("Общая мощность подключенных устройств: " + sumPower(Devices) + " Ватт");
  macbook.showPower() + macbook.showWeight();
  iphone.showPower() + iphone.showDiag();
  lcd.showPower() + lcd.showDiag();
