function ElectroApp (power, country) {
    this.ChargeType = 'euro',
    this.getPower = function() {
        console.log('Power is ' + power + ' vt')
    }
    this.country = country
}

const laptop = new ElectroApp(60, "China") 
const phone = new ElectroApp(27, "USA")

console.log(laptop)
console.log(phone)

laptop.getPower()