//Typescript lesson 1

let username = "Chris";
console.log(username);

let a = 12;

let b = "6";

let c = 2;

//Typescript lesson 2

let myName: string = "Chris";
// myName = 42
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

meaningOfLife = 42;
isLoading = false;
album = 2014;
album = "2014 forest hill drive";
album = true;

// const sum = (a,b) => {
//     return a + b
// }

const sum = (a: number, b: number) => {
  return a + b;
};

//Typescript lesson 3

let stringArr = ["one", "hey", "Chris"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

let all: (string | number)[];

all = [20, "chris"];

let test1 = [];

// Tuple

let Tuple: [string, number, boolean] = ["Chris", 20, true];

let mixed = ["John", 1, false];

mixed = Tuple;

// Tuple = mixed

let test3: object;
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

type Artist = {
  name: string;
  active: boolean;
  albums: (string | boolean | number)[];
};

let cole: Artist = {
  name: "Jermaine",
  active: true,
  albums: [2014, true, "The warm up"],
};

let em: Artist = {
  name: "Marshall",
  active: true,
  albums: ["Relapse", "encore", "the eminem show"],
};

let pac: Artist = {
  name: "Tupac",
  active: false,
  albums: ["All Eyez on Me", " Gridlock'd", " 2Pacalypse Now"],
};

const greetartist = (artist: Artist) => {
  let greeting = document.getElementById("greeting") as HTMLDivElement;
  let active = document.getElementById("active") as HTMLElement;
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
  } else {
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

let myName1: "Chris";
// myName1 = 'Dave' === wrong litteral assignment above / specific assignment

let username1: "Chris" | "Alex" | "Brandon";
username1 = "Chris";

//Functions type aliases
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// Optional parameters

const addAll = (a: number, b: number, c?: number): number => {
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
const sumAll = (a: number = 10, b?: number, c: number = 2): number => {
  if (typeof b !== "undefined") {
    return a + b + c;
  }
  return a + c;
};

// Have to put undefined first or it will not find an argument for b
// A parameter can not have a question mark and initializer
console.log(sumAll(undefined, 3));
console.log(sumAll(undefined));

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3, 4));

//Typescript lesson 5

type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let x: One = "hello";
let y = x as Two; // less specific
let z = x as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return a + "," + b;
};

let concat: string = addOrConcat(3, 4, "concat") as string;
let concat2: number = addOrConcat(3, 4, "concat") as number; // be careful  ts sees no problem - but a string is returned

// 10 as string
10 as unknown as string;

//The DOM

//Typescript lesson 6 - classes

class Coder {
  // These are no longer needed because we added visibility modifiers to the properties in constructor
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typscript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I am ${this.age}`;
  }
}

const Chris = new Coder("Chris", "R&B", 20);

class webDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new webDev("Mac", "Sara", "Lofi", 25);

console.log("My name is " + Sara.name + ", " + Sara.getLang());

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

// static class

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = Peeps.count++;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);

//Getters & Setters

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }
}

//Typescript lesson 7

interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
  [index: string]: number;
}

// interface TransactionObj {
//   [index: string]: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

//Optional properties

interface Student {
  name: string;
  GPA: number;
  classes?: number[];
  // [key: string]: string | number | number[] | undefined
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof Student]);
});

//Typescript lesson 8 - generics

const stringEcho = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(John));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue([]));

//Interface generics

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const BoolVal = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

//Typscript lesson 9 - Ultility Types skipped lesson 8 for now go back later

//Partial

interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
  studentId: 'compsci123',
  title: 'Final Project',
  grade: 0
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})
console.log(assignGraded)

interface Point {
  f: number;
  g: number;
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}

const pointPart: Partial<Point> = {
  f: 10,
}

console.log(pointPart)

const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
}

const pointFootbal: Omit<Point, 'g'> = {
  f: 3
} 
console.log(pointFootbal)

type PointPrinter = (p: { t: number; y: string; }, l:{ j: string; k: string }) => void
const newpoint: Parameters<PointPrinter>[1] = {
  j: 'hello',
  k: 'lame'
}

const lastPoint: Readonly<Point> = {
  f: 4,
  g: 5
}

console.log(newpoint)

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users'
  ).then(res => {
    return res.json()
  }).catch(err => {
    if(err instanceof Error) console.log(err,
      onmessage)
  })
  return data
}