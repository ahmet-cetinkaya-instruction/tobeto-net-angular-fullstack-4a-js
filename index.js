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

//#region Operators
console.log("-----------------Operators-----------------");

// Aritmetik Operatörler
// +, -, *, /, %, **, ++, --

// Atama Operatörleri
//. =, +=, -=, *=, /=, %=, **=

// Karşılaştırma Operatörleri
// ==, ===, !=, !==, >, <, >=, <=

// = = // Tip dönüşümü yapar
console.log('"1" == 1', "1" == 1); // true
// = = = // Tip dönüşümü yapmaz // Strict Equality // Tavsiye edilen
console.log('"1" === 1', "1" === 1); // false
// ! = // Tip dönüşümü yapar
console.log('"1" != 1', "1" != 1); // false
// ! = = // Tip dönüşümü yapmaz // Strict Inequality // Tavsiye edilen
console.log('"1" !== 1', "1" !== 1); // true

// Mantıksal Operatörler
// &&, ||, !

// Ternary Operatör
// ? :
const ternary = 5 > 3 ? "5 büyüktür 3" : "5 küçüktür 3";
console.log('ternary: ', ternary);

// Nullish Coalescing Operator
// ?? : null veya undefined ise sağdaki değeri alır
let nullishValue = null;
let nullishCoalescing = nullishValue ?? "Default Value";
console.log('nullishCoalescing: ', nullishCoalescing);

// || : false (undefined, null, 0, "", false) ise sağdaki değeri alır
let orValue = nullishValue || "Default Value";
console.log('orValue: ', orValue);

//#endregion