import IUser from "./counter"
import { Employee } from "./model"

const username: string = 'thuan'
let age: number
let isLoading: boolean = false

let second: number = 0o377  // octal
let third: number = 0x37CF  // hexadecimal
let fourth: number = 0b11010 // binary

let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

console.log(stringArr)

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van')

// union

let code: (string | number)

code = 1
code = 'ABC'

// Tuple 
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
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

// any
let something: any = '123'
something = true

// void 

function sayHi(): void {
  console.log('Hello World')
}

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


let emp = new Employee(1, 'thuan')
emp.displayEmployee()

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

