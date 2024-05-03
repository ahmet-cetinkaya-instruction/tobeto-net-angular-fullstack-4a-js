var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Helloworld");
//#region Variables
// *** C#'dan farklı
console.log("-----------------Variables-----------------");
var number1 = 10;
// number1 = "sad"; // Error
var number2 = 3.14;
console.log(typeof number1, number1);
console.log(typeof number2, number2);
var string1 = "Hello";
console.log(typeof string1, string1);
var boolean1 = true;
// boolean1 = false // Error
console.log(typeof boolean1, boolean1);
var null1 = null; // null: empty value // Programcının isteyerek, bilerek bir değeri olmadığını belirtmek için kullanılır.
console.log(typeof null1, null1);
var undefined1; // undefined: değeri olmayan değişken
console.log(typeof undefined1, undefined1);
var array1 = [1, "Ahmet", true, null, {}];
console.log(typeof array1, array1, array1[1]);
var object1 = {
    name: "Ahmet",
    age: 25,
    isStudent: true,
};
// object1.surname = "Yılmaz"; // dinamik property oluşturamıyoruz
console.log(typeof object1, object1, object1.name, object1["surname"]);
var person1 = {
    name: "Ahmet",
    age: 25,
    isStudent: true,
};
person1 = null;
var person4 = {
    name: "Ahmet",
    age: 25,
    isStudent: true,
};
var date = new Date();
console.log(typeof date, date); // toString methodu çalışır
var func = function () {
    return "Function";
};
console.log(typeof func, func, func());
var arrowFunc = function () {
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
var ternary = 5 > 3 ? "5 büyüktür 3" : "5 küçüktür 3";
console.log("ternary: ", ternary);
// Nullish Coalescing Operator
// ?? : null veya undefined ise sağdaki değeri alır
var nullishValue = null;
var nullishCoalescing = nullishValue !== null && nullishValue !== void 0 ? nullishValue : "Default Value";
console.log("nullishCoalescing: ", nullishCoalescing);
// || : false (undefined, null, 0, "", false) ise sağdaki değeri alır  // *** C#'dan farklı olarak
var orValue = nullishValue || "Default Value";
console.log("orValue: ", orValue);
//#endregion
//#region Control Structures
// If-Else
console.log("-----------------If-Else-----------------");
var number = 10;
if (number > 5) {
    console.log("Sayı 5'den büyük");
}
else if (number < 5) {
    console.log("Sayı 5'den küçük");
}
else {
    console.log("Sayı 5'e eşit");
}
// Switch-Case
console.log("-----------------Switch-Case-----------------");
var day = 1;
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
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1);
}
// While
console.log("-----------------While-----------------");
var i = 0;
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
var object2 = {
    name: "Ahmet",
    age: 25,
    isStudent: true,
};
for (var key in object2) {
    console.log(key, object2[key]);
}
// For-Of // C# foreach
console.log("-----------------For-Of-----------------");
var array2 = [1, 2, 3, 4, 5];
for (var _i = 0, array2_1 = array2; _i < array2_1.length; _i++) {
    var value = array2_1[_i];
    console.log(value);
}
array2.forEach(function (value) {
    console.log(value);
});
//#endregion
//#region Functions
// *** C#'dan farklı
console.log("-----------------Functions-----------------");
function sum(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
    console.log("Bu satır çalışmaz");
}
console.log(sum(5), sum(5, 15));
var database = {
    host: "localhost",
    port: 3306,
    connect: function () {
        console.log("Connected");
        var disconnect = function () {
            console.log("Disconnected");
        };
        return {
            // Nested Function
            add: function () {
                console.log("Added");
                disconnect();
            },
            update: function () {
                console.log("Updated");
                disconnect();
            },
            delete: function () {
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
}
catch (error) {
    console.error("catch: ", error);
}
//#endregion
//#region Keyed Collections
console.log("-----------------Keyed Collections-----------------");
// Map
var map = new Map();
map.set("name", "Ahmet");
map.set(1, "One");
// Objelerden farklı olarak key kısmı her türlü değer olabilir.
// Objelerde key sadece string olabilir.
// Set
var set = new Set();
set.add("Ahmet");
set.add("Ahmet"); // Aynı değeri tekrar eklemeye izin vermez
console.log(set);
//#endregion
//#region JSON
console.log("-----------------JSON-----------------");
var type = require("os").type;
var packageJson = require("./package.json"); // CommonJS
console.log(typeof packageJson, packageJson);
// import package from "./package.json"; // Module // ES6
for (var key in packageJson) {
    console.log(key, packageJson[key]);
}
//#endregion
//#region Type Conversion
console.log("-----------------Type Conversion-----------------");
var number3 = 10;
var string2 = number3.toString();
console.log(typeof number3, number3, typeof string2, string2);
var number4 = Number.parseInt(string2);
var number5 = Number.parseFloat(string2);
console.log(typeof string2, string2, typeof number4, number4, typeof number5, number5);
var string3 = String(number5);
console.log(typeof number5, number5, typeof string3, string3);
var number6 = Number(string3);
console.log(typeof string3, string3, typeof number6, number6);
var boolean2 = Boolean(number6); // 0, "", null, undefined, NaN, false -> false, diğerleri -> true
console.log(typeof number6, number6, typeof boolean2, boolean2);
//#endregion
//#region Template Literals
console.log("-----------------Template Literals-----------------");
var name2 = "Ahmet";
var surname = "Yılmaz";
var fullName = name2 + " " + surname;
var fullName2 = "".concat(name2, " ").concat(surname); // *** C#'dan biraz farklı
console.log(fullName, fullName2);
//#endregion
//#region OOP
console.log("-----------------OOP-----------------");
var Live = /** @class */ (function () {
    function Live() {
    }
    return Live;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name, age) {
        var _this = _super.call(this) || this;
        _this._name = name; // Önceden bir field veya property oluşturmaya gerek kalmadan direkt olarak tanımlanabilir.
        _this._age = age;
        return _this;
    }
    Human.prototype.breathe = function () {
        throw new Error("Method not implemented.");
    };
    Human.prototype.getName = function () {
        return this._name;
    };
    return Human;
}(Live));
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    // Kalıtım
    function Person(name, age, work) {
        var _this = _super.call(this, name, age) || this; // super: base sınıfı işaret eder // super() -> base sınıfın constructor'ını çalıştırır.
        _this._work = work; // this: instance referansı işaret eder
        return _this;
    }
    // Override: base sınıftaki metodu ezer
    Person.prototype.getName = function () {
        console.log("Person getName");
        return _super.prototype.getName.call(this);
    };
    Person.prototype.getWork = function () {
        return this._work;
    };
    return Person;
}(Human));
var person = new Person("Ahmet", 25, "Chief"); // yeni bir nesne/object instance oluşturuldu.
console.log("person.getName()", person.getName());
//#endregion
//#region Destructing
// *** C#'dan farklı
// Bir objenin veya array'in içindeki elemanları ayrı ayrı değişkenlere atamak için kullanılır.
console.log("-----------------Destructing-----------------");
var person2 = {
    name: "Ahmet",
    age: 25,
    work: "Developer",
};
// const personName = person2.name;
// const age = person2.age;
var personName = person2.name, age = person2.age;
console.log(personName, age);
var numbers = [1, 2, 3, 4, 5];
// const number7 = numbers[0];
// const number8 = numbers[1];
// const restNumbers = numbers.slice(2);
var number7 = numbers[0], number8 = numbers[1], restNumbers = numbers.slice(2);
console.log("[number7, number8, ...rest] = numbers", number7, number8, restNumbers);
//#endregion
//#region Rest/Spread Operator
// *** C#'dan farklı
// Rest: Parametrelerin toplanması, bir obje veya array'in içindeki elemanları bir araya getirmek için kullanılır.
// Spread: Parametrelerin ayrılması, bir obje veya array'in içindeki elemanları tek tek ayrıştırmak için kullanılır.
console.log("-----------------Rest/Spread Operator-----------------");
function sum2() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // Rest // C#'daki params
    return numbers.reduce(function (total, number) { return total + number; }, 0);
}
console.log("sum2(1, 2, 3, 4, 5)", sum2(1, 2, 3, 4, 5));
var numbers2 = [1, 2, 3, 4, 5];
console.log("sum2(...numbers2)", sum2.apply(void 0, numbers2)); // Spread
var numbers3 = __spreadArray(__spreadArray([0], numbers2, true), [6], false);
console.log("numbers3", numbers3);
console.log("person2", person2);
var person3 = __assign(__assign({}, person2), { age: 30, surname: "Yılmaz" });
console.log("person3", person3);
//#endregion
