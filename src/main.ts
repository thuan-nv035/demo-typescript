import IUser from "./counter"

//string
const username: string = 'thuan'

// number
let age: number
let second: number = 0o377  // octal
let third: number = 0x37CF  // hexadecimal
let fourth: number = 0b11010 // binary

// boolean
let isLoading: boolean = false

// array
let stringArr: string[] = ['one', 'hey', 'Dave']

let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150] // multy type array or tuple

// Tuple 
let myTuple: [string, number, boolean] = ['Dave', 42, true]

/*
enum
+ numeric enum
+ string enum
+ heterogeneous enum
*/



// union : allows us to use more than one data type for a variable or a function parameter. This is called union type.

let code: (string | number)

code = 1
code = 'ABC'

// any 

let title: any = 'hello world'
title = 2

let arr: any[] = ['hello', true]
arr.push(2)

// void 

function sayHi(): void {
  console.log('Hello World')
}


// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = {}

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
}

exampleObj.prop2 = false

exampleObj.prop1 = 'John'

console.log(exampleObj)

interface Guitarist {
  name?: string,
  active: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  active: true,
  albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  return 'Hello!'
}

console.log(greetGuitarist(jp))

// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U)


// function

const sum = (x: number, y: number): number => {
  return x + y
}

// Rest Parameters 
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

console.log(total(10, 2, 3))


// interface as function type

// interface IUser {
//   id: number
//   username: string
//   getSalary: (number: number) => number
// }

interface KeyValue {
  (key: number, value: string): void
}

function addKeyValue(key: number, value: string): void {
  console.log(`adding ${key} and value ${value}`)
}

let kvp: KeyValue = addKeyValue
kvp(1, 'true')


// The DOM 
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')
const button: HTMLButtonElement | null = document.querySelector('button')

// Awaited - helps us with the ReturnType of a Promise 

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {

  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users/1'
  ).then(res => {
    return res.json()
  }).catch(err => {
    if (err instanceof Error) console.log(err.message)
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))

interface IPersons {
  name: string
  display(): void
}

interface IEmployee {
  code: number
}

class Employee implements IPersons, IEmployee {
  code: number
  name: string

  constructor(code: number, name: string) {
    this.code = code
    this.name = name
  }

  display(): void {
    console.log('name = ' + this.name + " code = " + this.code)
  }
}

let per: IPersons = new Employee(111, "thuan")
per.display()