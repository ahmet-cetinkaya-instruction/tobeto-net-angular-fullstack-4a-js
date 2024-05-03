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

    return {
      // Nested Function
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

//#region Error Handling
console.log("-----------------Error Handling-----------------");

try {
  throw new Error("Hata");
} catch (error) {
  console.error("catch: ", error);
}
//#endregion

//#region Keyed Collections
console.log("-----------------Keyed Collections-----------------");

// Map
const map = new Map();
map.set("name", "Ahmet");
map.set(1, "One");
// Objelerden farklı olarak key kısmı her türlü değer olabilir.
// Objelerde key sadece string olabilir.

// Set
const set = new Set();
set.add("Ahmet");
set.add("Ahmet"); // Aynı değeri tekrar eklemeye izin vermez
console.log(set);
//#endregion

//#region JSON
console.log("-----------------JSON-----------------");

const { type } = require("os");
const package = require("./package.json"); // CommonJS
console.log(typeof package, package);
// import package from "./package.json"; // Module // ES6
for (let key in package) {
  console.log(key, package[key]);
}
//#endregion

//#region Type Conversion
console.log("-----------------Type Conversion-----------------");

let number3 = 10;
let string2 = number3.toString();
console.log(typeof number3, number3, typeof string2, string2);

let number4 = Number.parseInt(string2);
let number5 = Number.parseFloat(string2);
console.log(
  typeof string2,
  string2,
  typeof number4,
  number4,
  typeof number5,
  number5
);

let string3 = String(number5);
console.log(typeof number5, number5, typeof string3, string3);

let number6 = Number(string3);
console.log(typeof string3, string3, typeof number6, number6);

let boolean2 = Boolean(number6); // 0, "", null, undefined, NaN, false -> false, diğerleri -> true
console.log(typeof number6, number6, typeof boolean2, boolean2);

//#endregion

//#region Template Literals
console.log("-----------------Template Literals-----------------");

let name = "Ahmet";
let surname = "Yılmaz";
let fullName = name + " " + surname;
let fullName2 = `${name} ${surname}`; // *** C#'dan biraz farklı
console.log(fullName, fullName2);
//#endregion

//#region OOP
console.log("-----------------OOP-----------------");

class Human {
  _name; // Field // *** C#'dan farklı // varsılan public
  _age; // JS tarafında isimlendirmeyle özel alan olduğu sözel olarak belirtilebilir.

  constructor(name, age) {
    this._name = name; // Önceden bir field veya property oluşturmaya gerek kalmadan direkt olarak tanımlanabilir.
    this._age = age;
  }

  getName() {
    return this._name;
  }
}

class Person extends Human {
  // Kalıtım
  constructor(name, age, work) {
    super(name, age); // super: base sınıfı işaret eder // super() -> base sınıfın constructor'ını çalıştırır.
    this._work = work; // this: instance referansı işaret eder
  }

  // Override: base sınıftaki metodu ezer
  getName() {
    console.log("Person getName");
    return super.getName();
  }

  getWork() {
    return this._work;
  }
}

const person = new Person("Ahmet", 25); // yeni bir nesne/object instance oluşturuldu.
console.log("person.getName()", person.getName());

//#endregion

//#region Destructing
// *** C#'dan farklı
// Bir objenin veya array'in içindeki elemanları ayrı ayrı değişkenlere atamak için kullanılır.
console.log("-----------------Destructing-----------------");

const person2 = {
  name: "Ahmet",
  age: 25,
  work: "Developer",
};
// const personName = person2.name;
// const age = person2.age;
const { name: personName, age } = person2;
console.log(personName, age);

const numbers = [1, 2, 3, 4, 5];
// const number7 = numbers[0];
// const number8 = numbers[1];
// const restNumbers = numbers.slice(2);
const [number7, number8, ...restNumbers] = numbers;
console.log("[number7, number8, ...rest] = numbers", number7, number8, restNumbers);

//#endregion

//#region Rest/Spread Operator
// *** C#'dan farklı
// Rest: Parametrelerin toplanması, bir obje veya array'in içindeki elemanları bir araya getirmek için kullanılır.
// Spread: Parametrelerin ayrılması, bir obje veya array'in içindeki elemanları tek tek ayrıştırmak için kullanılır.
console.log("-----------------Rest/Spread Operator-----------------");

function sum2(...numbers) { // Rest // C#'daki params
    return numbers.reduce((total, number) => total + number, 0);
}
console.log("sum2(1, 2, 3, 4, 5)", sum2(1, 2, 3, 4, 5));

const numbers2 = [1, 2, 3, 4, 5];
console.log("sum2(...numbers2)", sum2(...numbers2)); // Spread

const numbers3 = [0, ...numbers2, 6];
console.log("numbers3", numbers3);

console.log("person2", person2);
const person3 = {
    // name: person2.name,
    // age: person2.age,
    // work: person2.work,
    ...person2, // Spread
    age: 30,
    surname: "Yılmaz",
};
console.log("person3", person3);

//#endregion