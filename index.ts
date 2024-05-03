console.log("Helloworld");

//#region Variables
// *** C#'dan farklı
console.log("-----------------Variables-----------------");

let number1: number = 10;
// number1 = "sad"; // Error
let number2: number = 3.14;
console.log(typeof number1, number1);
console.log(typeof number2, number2);

let string1: string = "Hello";
console.log(typeof string1, string1);

const boolean1: boolean = true;
// boolean1 = false // Error
console.log(typeof boolean1, boolean1);

const null1: null = null; // null: empty value // Programcının isteyerek, bilerek bir değeri olmadığını belirtmek için kullanılır.
console.log(typeof null1, null1);

let undefined1: undefined; // undefined: değeri olmayan değişken
console.log(typeof undefined1, undefined1);

let array1: any[] = [1, "Ahmet", true, null, {}];
console.log(typeof array1, array1, array1[1]);

let object1: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Ahmet",
  age: 25,
  isStudent: true,
};
// object1.surname = "Yılmaz"; // dinamik property oluşturamıyoruz
console.log(typeof object1, object1, object1.name, object1["surname"]);

type PersonType = {
  name: string;
  age: number;
  isStudent: boolean;
} | null;
let person1: PersonType = {
  name: "Ahmet",
  age: 25,
  isStudent: true,
};
person1 = null;

interface PersonInterface {
  name: string;
  age: number;
  isStudent: boolean;
}
// type PersonType2 = PersonInterface | null;
let person4: PersonInterface | null = {
  name: "Ahmet",
  age: 25,
  isStudent: true,
};

let date: Date = new Date();
console.log(typeof date, date); // toString methodu çalışır

let func = function (): string {
  return "Function";
};
console.log(typeof func, func, func());

let arrowFunc = (): string => {
  return "Arrow Function";
};
console.log(typeof arrowFunc, arrowFunc, arrowFunc());

function func1(): string {
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

// Typescript tarafında farklı tipleri karşılaştırırken hata verir.
// // = = // Tip dönüşümü yapar
// console.log('"1" == 1', "1" == 1); // true // Error
// // = = = // Tip dönüşümü yapmaz // Strict Equality // Tavsiye edilen  // *** C#'dan farklı olarak
// console.log('"1" === 1', "1" === 1); // false // Error
// // ! = // Tip dönüşümü yapar
// console.log('"1" != 1', "1" != 1); // false // Error
// // ! = = // Tip dönüşümü yapmaz // Strict Inequality // Tavsiye edilen  // *** C#'dan farklı olarak
// console.log('"1" !== 1', "1" !== 1); // true // Error

// Mantıksal Operatörler
// &&, ||, !

// Ternary Operatör
// ? :
const ternary: string = 5 > 3 ? "5 büyüktür 3" : "5 küçüktür 3";
console.log("ternary: ", ternary);

// Nullish Coalescing Operator
// ?? : null veya undefined ise sağdaki değeri alır
let nullishValue: any = null;
let nullishCoalescing: any | string = nullishValue ?? "Default Value";
console.log("nullishCoalescing: ", nullishCoalescing);

// || : false (undefined, null, 0, "", false) ise sağdaki değeri alır  // *** C#'dan farklı olarak
let orValue: any | string = nullishValue || "Default Value";
console.log("orValue: ", orValue);

//#endregion

//#region Control Structures

// If-Else
console.log("-----------------If-Else-----------------");
let number: number = 10;
if (number > 5) {
  console.log("Sayı 5'den büyük");
} else if (number < 5) {
  console.log("Sayı 5'den küçük");
} else {
  console.log("Sayı 5'e eşit");
}

// Switch-Case
console.log("-----------------Switch-Case-----------------");
let day: number = 1;
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
let i: number = 0;
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
let object2: PersonType = {
  name: "Ahmet",
  age: 25,
  isStudent: true,
};
for (let key in object2) {
  console.log(key, object2[key]);
}

// For-Of // C# foreach
console.log("-----------------For-Of-----------------");
let array2: number[] = [1, 2, 3, 4, 5];
for (let value of array2) {
  console.log(value);
}
array2.forEach((value: number) => {
  console.log(value);
});

//#endregion

//#region Functions
// *** C#'dan farklı
console.log("-----------------Functions-----------------");

function sum(a: number, b: number = 10): number {
  return a + b;
  console.log("Bu satır çalışmaz");
}
console.log(sum(5), sum(5, 15));

type Database = {
  host: string;
  port: number;
  connect: () => {
    add: () => void;
    update: () => void;
    delete: () => void;
  };
};
const database: Database = {
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
const map: Map<any, string> = new Map();
map.set("name", "Ahmet");
map.set(1, "One");
// Objelerden farklı olarak key kısmı her türlü değer olabilir.
// Objelerde key sadece string olabilir.

// Set
const set: Set<string> = new Set();
set.add("Ahmet");
set.add("Ahmet"); // Aynı değeri tekrar eklemeye izin vermez
console.log(set);
//#endregion

//#region JSON
console.log("-----------------JSON-----------------");

const { type } = require("os");
type PackageType = {
  name: string;
  version: string;
  description: string;
  main: string;
  scripts: {
    test: string;
    start: string;
  };
  keywords: string[];
}
const packageJson: PackageType = require("./package.json"); // CommonJS
console.log(typeof packageJson, packageJson);
// import package from "./package.json"; // Module // ES6
for (let key in packageJson) {
  console.log(key, packageJson[key]);
}
//#endregion

//#region Type Conversion
console.log("-----------------Type Conversion-----------------");

let number3: number = 10;
let string2: string = number3.toString();
console.log(typeof number3, number3, typeof string2, string2);

let number4: number = Number.parseInt(string2);
let number5: number = Number.parseFloat(string2);
console.log(
  typeof string2,
  string2,
  typeof number4,
  number4,
  typeof number5,
  number5
);

let string3:string = String(number5);
console.log(typeof number5, number5, typeof string3, string3);

let number6: number = Number(string3);
console.log(typeof string3, string3, typeof number6, number6);

let boolean2:boolean = Boolean(number6); // 0, "", null, undefined, NaN, false -> false, diğerleri -> true
console.log(typeof number6, number6, typeof boolean2, boolean2);

//#endregion

//#region Template Literals
console.log("-----------------Template Literals-----------------");

let name2 = "Ahmet";
let surname = "Yılmaz";
let fullName = name2 + " " + surname;
let fullName2 = `${name2} ${surname}`; // *** C#'dan biraz farklı
console.log(fullName, fullName2);
//#endregion

//#region OOP
console.log("-----------------OOP-----------------");

interface IHuman {
  getName(): string;
}

abstract class Live {
  protected abstract breathe(): void;
}

class Human extends Live implements IHuman {
  override breathe(): void {
    throw new Error("Method not implemented.");
  }
  private _name; // Field // *** C#'dan farklı // varsılan public
  private _age; // JS tarafında isimlendirmeyle özel alan olduğu sözel olarak belirtilebilir.

  constructor(name, age) {
    super();
    this._name = name; // Önceden bir field veya property oluşturmaya gerek kalmadan direkt olarak tanımlanabilir.
    this._age = age;
  }

  public getName() {
    return this._name;
  }
}

class Person extends Human {
  private _work;

  // Kalıtım
  constructor(name, age, work) {
    super(name, age); // super: base sınıfı işaret eder // super() -> base sınıfın constructor'ını çalıştırır.
    this._work = work; // this: instance referansı işaret eder
  }

  // Override: base sınıftaki metodu ezer
  override getName() {
    console.log("Person getName");
    return super.getName();
  }

  public getWork() {
    return this._work;
  }
}

const person = new Person("Ahmet", 25, "Chief"); // yeni bir nesne/object instance oluşturuldu.
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
console.log(
  "[number7, number8, ...rest] = numbers",
  number7,
  number8,
  restNumbers
);

//#endregion

//#region Rest/Spread Operator
// *** C#'dan farklı
// Rest: Parametrelerin toplanması, bir obje veya array'in içindeki elemanları bir araya getirmek için kullanılır.
// Spread: Parametrelerin ayrılması, bir obje veya array'in içindeki elemanları tek tek ayrıştırmak için kullanılır.
console.log("-----------------Rest/Spread Operator-----------------");

function sum2(...numbers) {
  // Rest // C#'daki params
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
