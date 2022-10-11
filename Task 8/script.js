/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(){
this.subtract = function(num1, num2){
    return num1 - num2;
};
this.divide = function(num1, num2){
    return num1 / num2;
};
this.add = function(num1, num2){
    return num1 + num2;
};
this.multiply = function(num1, num2){
    return num1 * num2;
};
}
const calculator = new Calculator();
console.log(calculator.subtract(4,5));
console.log(calculator.divide(4,5));
console.log(calculator.add(4,5));
console.log(calculator.multiply(4,5));