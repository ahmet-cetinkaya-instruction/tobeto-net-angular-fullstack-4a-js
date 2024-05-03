console.log("Helloworld");

//#region Variables
console.log("-----------------Variables-----------------");

let number1 = 10;
let number2 = 3.14;
console.log(typeof number1, number1);
console.log(typeof number2, number2);

let string1 = "Hello";
console.log(typeof string1, string1);

const boolean1 = true;
// boolean1 = false // Error
console.log(typeof boolean1, boolean1);

const null1 = null; // null: empty value // Programcının isteyerek, bilerek bir değeri olmadığını belirtmek için kullanılır.
console.log(typeof null1, null1);

let undefined1; // undefined: değeri olmayan değişken
console.log(typeof undefined1, undefined1);

let array1 = [1, "Ahmet", true, null, {}];
console.log(typeof array1, array1, array1[1]);

let object1 = {
  name: "Ahmet",
  age: 25,
  isStudent: true,
};
object1.surname = "Yılmaz";
console.log(typeof object1, object1, object1.name, object1["surname"]);

let date = new Date();
console.log(typeof date, date); // toString methodu çalışır

let func = function () {
  return "Function";
};
console.log(typeof func, func, func());

let arrowFunc = () => {
  return "Arrow Function";
};
console.log(typeof arrowFunc, arrowFunc, arrowFunc());

function func1() {
  return "Function 1";
}
console.log(typeof func1, func1, func1());

//#endregion