const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
let RENT = 40000
let FOOD = 15000
let OTHER = 15000
let MY_SALARY = 120000

ndflTax = MY_SALARY * NDFL;
mySalaryNet = MY_SALARY - ndflTax;
otherTaxes = mySalaryNet * (NDS + EXCISE);
totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
console.log('Зарплата ' + MY_SALARY + ' рублей')
console.log('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
console.log('Осталось ' + totalAvailable + ' рублей')