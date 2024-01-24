"use strict";
//Typescript lesson 1
let username = "Chris";
console.log(username);
let a = 12;
let b = "6";
let c = 2;
//Typescript lesson 2
let myName = "Chris";
// myName = 42
let meaningOfLife;
let isLoading;
let album;
meaningOfLife = 42;
isLoading = false;
album = 2014;
album = "2014 forest hill drive";
album = true;
// const sum = (a,b) => {
//     return a + b
// }
const sum = (a, b) => {
    return a + b;
};
//Typescript lesson 3
let stringArr = ["one", "hey", "Chris"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
let all;
all = [20, "chris"];
let test1 = [];
// Tuple
let Tuple = ["Chris", 20, true];
let mixed = ["John", 1, false];
mixed = Tuple;
// Tuple = mixed
let test3;
test3 = {};
console.log(typeof test3);
const exampleObj = {
// prop1: 'Dave',
// prop2: true,
};
const person = {
    name: ["Chris", "Alex", "Brandon"],
    age: [20, 16, 12],
    id: [0, 1, 2],
};
let latestId = person.id[-1];
person.name.push("Jeff");
person.age.push(21);
person.id.push(latestId + 1);
let cole = {
    name: "Jermaine",
    active: true,
    albums: [2014, true, "The warm up"],
};
let em = {
    name: "Marshall",
    active: true,
    albums: ["Relapse", "encore", "the eminem show"],
};
let pac = {
    name: "Tupac",
    active: false,
    albums: ["All Eyez on Me", " Gridlock'd", " 2Pacalypse Now"],
};
const greetartist = (artist) => {
    let greeting = document.getElementById("greeting");
    let active = document.getElementById("active");
    if (artist.active === true) {
        greeting.innerText =
            "Hello " +
                artist.name +
                ", will you preform songs from " +
                artist.albums +
                "?";
        active.innerText = "I am excited to see you preform.";
    }
    if (artist.active === false) {
        greeting.innerText =
            "Hello " +
                artist.name +
                ", will you preform songs from " +
                artist.albums +
                "?";
        active.innerText = "I miss watching you preform.";
    }
    else {
        return "Error";
    }
};
//Type script lesson 4
// Type aliases
// type stringOrNumber = string | number;
// type stringOrNumberArr = (string | number)[];
// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: stringOrNumberArr;
// };
//Literal Types
let myName1;
// myName1 = 'Dave' === wrong litteral assignment above / specific assignment
let username1;
username1 = "Chris";
let multiply = function (c, d) {
    return c * d;
};
// Optional parameters
const addAll = (a, b, c) => {
    // Must have or else ts will give you an error saying "C is possibly 'undefined'"
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    // Must have or else you will get an error
    return a + b;
};
console.log(addAll(5, 10));
console.log(addAll(5, 10, 4));
// Default parameters
const sumAll = (a = 10, b, c = 2) => {
    if (typeof b !== "undefined") {
        return a + b + c;
    }
    return a + c;
};
// Have to put undefined first or it will not find an argument for b
// A parameter can not have a question mark and initializer
console.log(sumAll(undefined, 3));
console.log(sumAll(undefined));
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4));
//convert to more or less specific
let x = "hello";
let y = x; // less specific
let z = x; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return a + "," + b;
};
let concat = addOrConcat(3, 4, "concat");
let concat2 = addOrConcat(3, 4, "concat"); // be careful  ts sees no problem - but a string is returned
// 10 as string
10;
//The DOM
//Typescript lesson 6 - classes
class Coder {
    // These are no longer needed because we added visibility modifiers to the properties in constructor
    // name: string;
    // music: string;
    // age: number;
    // lang: string;
    constructor(name, music, age, lang = "Typscript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Chris = new Coder("Chris", "R&B", 20);
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev("Mac", "Sara", "Lofi", 25);
console.log("My name is " + Sara.name + ", " + Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
// static class
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = Peeps.count++;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
//Getters & Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
}
// interface TransactionObj {
//   [index: string]: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
//Typescript lesson 8 - generics
const stringEcho = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(John));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue([]));
const BoolVal = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
assignVerified.grade;
const pointPart = {
    f: 10,
};
console.log(pointPart);
const nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
const pointFootbal = {
    f: 3
};
console.log(pointFootbal);
const newpoint = {
    j: 'hello',
    k: 'lame'
};
console.log(newpoint);
