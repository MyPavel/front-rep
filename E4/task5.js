class Device {
    constructor(name, power, plugged) {
        this.name = name;
        this.power = power;
        this.plugged = plugged;
    }
    showPower() {
        console.log(this.name + ': Мощность: ' + this.power + ' Ватт');
    }
}


  
  class Phone extends Device {
    constructor(name, power, plugged, type) {
        super(name, power, plugged);
        this.name = name;
        this.power = power;
        this.plugged = plugged;
        this.showType = function () {
            console.log(name + ': Тип устройства: ' + type);
        };
    }
}

  class Laptop extends Device {
    constructor(name, power, plugged, weight) {
        super(name, power, plugged);
        this.name = name;
        this.power = power;
        this.plugged = plugged;
        this.showWeight = function () {
            console.log(name + ': Вес: ' + weight);
        };
    }
}
    
  class Monitor extends Device {
    constructor(name, power, plugged, diagonal) {
        super(name, power, plugged);
        this.name = name;
        this.power = power;
        this.plugged = plugged;
        this.showDiag = function () {
            console.log(name + ': Диагональ: ' + diagonal);
        };
    }
}

   
  
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
  
  
  const lamp = new Device("Лампа Artstyle", 200, plugged = true);
  const macbook = new Laptop("Macbook", 130, plugged = true, 2000);
  const iphone = new Phone("iphone 13", 200, plugged = true, "Смартфон");
  const lcd = new Monitor("HP 24", 10, plugged = false, 24);
  let Devices = [macbook, iphone, lcd, lamp];
  
  
  console.log("Общая мощность подключенных устройств: " + sumPower(Devices) + " Ватт");
  lamp.showPower();
  macbook.showPower() + macbook.showWeight();
  iphone.showPower() + iphone.showType();
  lcd.showPower() + lcd.showDiag();
