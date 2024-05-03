console.log("Helloworld");

//#region Variables
// *** C#'dan farklı
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
// = = = // Tip dönüşümü yapmaz // Strict Equality // Tavsiye edilen  // *** C#'dan farklı olarak
console.log('"1" === 1', "1" === 1); // false
// ! = // Tip dönüşümü yapar
console.log('"1" != 1', "1" != 1); // false
// ! = = // Tip dönüşümü yapmaz // Strict Inequality // Tavsiye edilen  // *** C#'dan farklı olarak
console.log('"1" !== 1', "1" !== 1); // true

// Mantıksal Operatörler
// &&, ||, !

// Ternary Operatör
// ? :
const ternary = 5 > 3 ? "5 büyüktür 3" : "5 küçüktür 3";
console.log("ternary: ", ternary);

// Nullish Coalescing Operator
// ?? : null veya undefined ise sağdaki değeri alır
let nullishValue = null;
let nullishCoalescing = nullishValue ?? "Default Value";
console.log("nullishCoalescing: ", nullishCoalescing);

// || : false (undefined, null, 0, "", false) ise sağdaki değeri alır  // *** C#'dan farklı olarak
let orValue = nullishValue || "Default Value";
console.log("orValue: ", orValue);

//#endregion

//#region Control Structures

// If-Else
console.log("-----------------If-Else-----------------");
let number = 10;
if (number > 5) {
  console.log("Sayı 5'den büyük");
} else if (number < 5) {
  console.log("Sayı 5'den küçük");
} else {
  console.log("Sayı 5'e eşit");
}

// Switch-Case
console.log("-----------------Switch-Case-----------------");
let day = 1;
switch (day) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
}

// For
console.log("-----------------For-----------------");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While
console.log("-----------------While-----------------");
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("-----------------Do-While-----------------");
do {
  console.log(i);
  i++;
} while (i < 5);

// For-In // *** C#'dan farklı olarak
console.log("-----------------For-In-----------------");
let object2 = {
  name: "Ahmet",
  age: 25,
  isStudent: true,
};
for (let key in object2) {
  console.log(key, object2[key]);
}

// For-Of // C# foreach
console.log("-----------------For-Of-----------------");
let array2 = [1, 2, 3, 4, 5];
for (let value of array2) {
  console.log(value);
}
array2.forEach((value) => {
  console.log(value);
});

//#endregion

//#region Functions
// *** C#'dan farklı
console.log("-----------------Functions-----------------");

function sum(a, b = 10) {
  return a + b;
  console.log("Bu satır çalışmaz");
}
console.log(sum(5), sum(5, 15));

const database = {
  host: "localhost",
  port: 3306,
  connect: function () {
    console.log("Connected");

    const disconnect = () => {
      console.log("Disconnected");
    };

    return { // Nested Function
      add: () => {
        console.log("Added");
        disconnect();
      },
      update: function () {
        console.log("Updated");
        disconnect();
      },
      delete: () => {
        console.log("Deleted");
        disconnect();
      },
    };
  },
};
console.log(database);
console.log(database.host, database.port);
database.connect().add(); // Fluent yapısı

//#endregion
