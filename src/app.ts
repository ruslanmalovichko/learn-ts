// 1
// let a = 1 + 2
// let b = a + 3
// let c = {
//   apple: a,
//   banana: b
// }
// let d = c.apple * 4
// let e = 'Test' + []

import {rejects} from "assert";
import {type} from "os"

// 2
// function squareOf(n: number) {
//   return n * n;
// }
// squareOf(2)
// squareOf('z')

// 3
// let a: any = 666
// let b: any = ['danger']
// let c: any = a + b // any type fixes error with sum of different types
// console.log(c)

// 4
// let a: unknown = 30
// let b = a === 123
// let c = a + 10 // we can't sum unknown type
// if (typeof a === 'number') {
//   let d = a + 10
// }

// 5
// let a = true
// let b = false
// const c = true
// let d: boolean = true
// let e: true = true
// let f: true = false // error

// 6
// let a = 1234
// var b = Infinity * 0.10
// const c = 5678
// let d = a < b
// let e: number = 100
// let f: 26.218 = 26.218
// let g: 26.218 = 10 // error
// let oneMillion = 1_000_000
// let twoMillion: 2_000_000 = 2_000_000
// console.log(twoMillion)

// 7
// Do not use es6, but esnext
// let a = 1234n
// const b = 5678n
// var c = a + b
// let d = a < 1235
// let e = 88.5n // error, must be integer
// let f: bigint = 100n
// let g: 100n = 100n
// let h: bigint = 100 // error, bigint is not number

// 8
// let a = 'hello'
// var b = 'billy'
// const c = '!'
// let d = a + ' ' + b + c
// let e: string = 'zoom'
// let g: 'john' = 'zoe' // error, zoe is not john

// 9
// let a = Symbol('a')
// let b: symbol = Symbol('b')
// var c = a === b
// let d = a + 'x' // error, can't use symbol with plus

// const e = Symbol('e')
// const f: unique symbol = Symbol('f')
// let g: unique symbol = Symbol('f') // error, must be const
// let h = e === e
// let i = e === f // error, typeof e and typeof f have no overlap. Condition will always false

// 10
// let a: object = {
//   b: 'x'
// }
// console.log(a.b)

// const a: {b: number} = {
//   b: 12
// }
// console.log(a.b)

// let a = {
//   b: 'x'
// }
// console.log(a.b)

// let b = {
//   c: {
//     d: 'f'
//   }
// }
// console.log(b.c.d)

// let a: {b: number} = {
//   b: 12
// }
// console.log(a.b)

// let c: {
//   firstName: string
//   lastName: string
// } = {
//   firstName: 'john',
//   lastName: 'barrowman',
// }
// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public lastName2: string,
//   ) {}
// }
// console.log(c)
// c = new Person('matt', 'smith', 'smith2') // c requires firstName and lastName properties
// console.log(c)

// let a: {b: number}
// a = {} // error, a requires property b with type number
// a = {
//   b: 1,
//   c: 2 // error, c does not exist in type
// }

// let i: number
// let j = i * 3 // error, i should be assigned

// let i
// let j = i * 3 // error, i is possibly undefined

// let a: {
//   b: number
//   c?: string // we can add property c or not, if adds it should be string or undefined type
//   [key: number]: boolean // we can add a lot properties with number key like 1, 2. It is equal to boolean true or false
// }
// a = {b: 1}
// a = {b: 1, c: undefined}
// a = {b: 1, c: 'd'}
// a = {b: 1, 10: true}
// a = {b: 1, 10: true, 20: false}
// a = {10: true} // error, we should add b property
// a = {b: 1, 33: 'red'} // error, number should be boolean, not string

// let user: {
//   readonly firstName: string // property like a const
// } = {
//   firstName: 'abby'
// }
// user.firstName
// user.firstName = 'abbey with an e' // error, it's const property'

// let danger: {} // we have an ability to assign almost any type, except null and undefined. It's better to not use empty objects
// danger = {}
// danger = {x: 1}
// danger = []
// danger = 2
// console.log(danger)

// let airplaneSeatingAssigments: {
//   [seatNumber: string]: string
// } = {
//   '34D': 'Boris Cherny',
//   '34E': 'Bill Gates'
// }

// let a: {} = {toString() {return 3}}
// console.log(a.toString())
// let b: Object = {toString() {return 3}} // error, 3 should be string
// console.log(b.toString())

// 11
// type Age = number
// type Person = {
//   name: string
//   age: Age
// }
// let age: Age = 55
// let driver: Person = {
//   name: 'James May',
//   age: age // we can reduce code from "age: age" to "age"
// }
// console.log(driver)
// let age = 55
// let driver: Person = {
//   name: 'James May',
//   age: age // we can reduce code from "age: age" to "age"
// }
// console.log(driver)

// 12
// type Color = 'red'
// type Color = 'blue' // error, it's not allow to dublicate

// 13
// type Color = 'red'
// let x = Math.random() < .5
// if (x) {
//   type Color = 'blue' // type can be overlap inside block
//   let b: Color = 'blue'
// }
// else {
//   let c: Color = 'red'
// }

// 14
// type Cat = {name: string, purrs: boolean}
// type Dog = {name: string, barks: boolean, wags: boolean}
// type CatOrDogOrBoth = Cat | Dog
// type CatAndDog = Cat & Dog
// 
// // Cat
// let a: CatOrDogOrBoth = {
//   name: 'Bonkers',
//   purrs: true
// }
// 
// // Dog
// a = {
//   name: 'Domino',
//   barks: true,
//   wags: true
// }
// 
// // Both
// a = {
//   name: 'Donkers',
//   barks: true,
//   purrs: true,
//   wags: true
// }
// 
// // Both
// let b: CatAndDog = {
//   name: 'Domino',
//   barks: true,
//   purrs: true,
//   wags: true
// }

// 15
// function trueOrNull(isTrue: boolean) {
//   if (isTrue) {
//     return 'true'
//   }
//   return null
// }
// type Returns = string | null
// function c(a: string, b: number) {
//   return a || b
// }
// console.log(c('', 7))

// 16
// let a = [1, 2, 3]
// var b = ['a', 'b']
// let c: string[] = ['a']
// let d = [1, 'a']
// const e = [2, 'b']
// let f = ['red']
// f.push('blue')
// f.push(true) // error, we can't assign boolean in array, because type: string[]
// let g = []
// g.push(1)
// g.push('red')
// let h: number[] = []
// h.push(1)
// h.push('red') // error, we can't assign string in array, because type: number[]

// 17
// let d = [1, 'a']
// console.log(d.map(_ => {
//   if (typeof _ === 'number') {
//     return _ * 3
//   }
//   return _.toUpperCase()
// }))
// console.log(d)

// 18
// function buildArray() {
//   let a = []
//   a.push(1)
//   a.push('x')
//   return a // buildArray() is equal array a with 1 and 'x' parameters and (string | number)[] type. You can't add boolean parameters
// }
// let myArray = buildArray()
// myArray.push(true) // error, You can't add boolean parameters, because we allow (string | number)[] type
// myArray.push('a')
// console.log(myArray)

// 19
// let a: [number] = [1]

// let b: [string, string, number] = ['malcolm', 'gladwell', 1963]

// b = ['queen', 'elizabeth', 'ii', 1926] // error, 'ii' should be a number type, not string

// let trainFares: [number, number?][] = [ // should be array wrapper with arrays inside. Inside arrays can be one number or two numbers
//   [3.75],
//   [8.25, 7.70],
//   [10.50]
// ]

// equal to trainFares
// let moreTrainFares: ([number] | [number, number])[] = [ // should be array wrapper with arrays inside. Inside arrays can be one number or two numbers
//   [3.75],
//   [8.25, 7.70],
//   [10.50]
// ]

// let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire'] // array of strings. Require one element string
// let friends: [string, ...string[]] = ['Sara']

// let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c'] // array of one number, one boolean and can be a lot of strings. Require one number and one boolean
// let list: [number, boolean, ...string[]] = [1]

// 20
// let as: readonly number[] = [1, 2, 3]
// let bs: readonly number[] = as.concat(4) // add array element 4
// let cs: readonly number[] = as.slice(1) // part of array, start with index 1
// let three = bs[2] // get array element with 2 index
// console.log(as)
// console.log(bs)
// console.log(cs)
// console.log(three)
// as[4] = 5 // error, you can't assign array element in readonly array
// as.push(6) // error, you can't use push with readonly array
// as.splice(1) // error, you can't remove array element with index 1 in readonly array

// 21
// Readonly arrays:
// type A = readonly string[]
// type B = ReadonlyArray<string>
// type C = Readonly<string[]>

// type D = readonly [number, string]
// type E = Readonly<[number, string]>

// 22
// Returns number or null type
// function a(x: number) {
//   if (x < 10) {
//     return x
//   }
//   return null
// }

// Returns undefined
// function b() {
//   return undefined
// }

// Returns void
// function c() { // in console log console.log(c()) returns undefined
//   let a = 2 + 2
//   let b = a * a
// }

// Returns never
// function d() {
//   throw TypeError('I always error') // returns error
// }

// function doSomething() {
// 
// }

// Returns never
// function e() { // in console log console.log(e()) doesn't return
//   while (true) {
//     doSomething()
//   }
// }

// console.log(e())

// 23
// enum Language {
//   English,
//   Spanish,
//   Russian
// }

// enum Language { // enum name starts with capital letter, singular
//   English = 0, // enum keys start with capital letter
//   Spanish = 1,
//   Russian = 2
// }
// 
// let myFirstLanguage = Language.Russian
// let mySecondLanguage = Language['English']
// console.log(myFirstLanguage)
// console.log(mySecondLanguage)

// enum Language {
//   English = 0,
//   Spanish = 1,
// }
// 
// enum Language {
//   Russian = 2
// }

// enum Language {
//   English = 100,
//   Spanish = 200 + 300,
//   Russian // TypeScript use as 501. 501 is after 500
// }

// enum Color { // We can use different types of values
//   Red = '#c10000',
//   Blue = '#007ac1',
//   Pink = 0xc10050,
//   White = 255
// }
// 
// let red = Color.Red
// let pink = Color.Pink
// console.log(red)
// console.log(pink)

// let a = Color.Red
// let b = Color.Green // error, property does not exist

// let c = Color[0] // undefined, it isn't an error
// let d = Color[6] // undefined, it isn't an error

// console.log(a)
// console.log(c)
// console.log(d)

// const enum Language { // it's better to not use const enum
//   English,
//   Spanish,
//   Russian
// }
// 
// let a = Language.English
// let b = Language.Tagalog // error, property does not exist
// let c = Language[0] // error, use string literal only
// let d = Language[6] // error, use string literal only

// const enum Flippable {
//   Burger,
//   Chair,
//   Cup,
//   Skateboard,
//   Table
// }
// 
// function flip(f: Flippable) {
//   return 'flipped it'
// }
// 
// console.log(flip(Flippable.Chair)) // Returns flipped it
// console.log(flip(Flippable.Cup)) // Returns flipped it
// console.log(flip(12)) // Returns flipped it

// const enum Flippable {
//   Burger = 'Burger',
//   Chair = 'Chair',
//   Cup = 'Cup',
//   Skateboard = 'Skateboard',
//   Table = 'Table'
// }
// 
// function flip(f: Flippable) {
//   return 'flipped it'
// }
// 
// console.log(flip(Flippable.Chair)) // Returns flipped it
// console.log(flip(Flippable.Cup)) // Returns flipped it
// console.log(flip(12)) // 12 can't be assigned to Flippable
// console.log(flip('Hat')) // 'Hat' can't be assigned to Flippable

// Tasks in Part 3:
// 1
// let a = 1042 // a: number
// let b = 'apples and oranges' // b: string
// const c = 'pineapples' // c: "pineapples"
// let d = [true, true, false] // d: boolean[]
// let e = {type: 'ficus'} // e: {type: string}
// let f = [1, false] // f: (number | boolean)[]
// const g = [3] // g: number[]
// let h = null // h: any

// 2
// let i: 3 = 3
// i = 4 // error, i can assign 3 only

// let j = [1, 2, 3]
// j.push(4)
// j.push('5') // error, argument can be number only

// let k: never = 4 // error, we can't assign number to never type

// let l: unknown = 4
// let m = l * 2 // error, we can't multiply unknown type

// Part 4 of book
// 1
// function add(a: number, b: number) {
//   return a + b
// }

// function add(a: number, b: number): number { // a and b are parameters
//   return a + b
// }
// 
// function greet(name: string) {
//   return 'hello ' + name
// }
// 
// let greet2 = function(name: string) {
//   return 'hello ' + name
// }
// 
// let greet3 = (name: string) => {
//   return 'hello ' + name
// }
// 
// let greet4 = (name: string) => 'hello ' + name
// 
// let greet5 = new Function('name', 'return "hello " + name')
// 
// console.log(add(1, 2)) // 1 and 2 are arguments
// console.log(greet('Crystal'))

// add(1) // error, we need second argument
// add(1, 'a') // error, argument a should be a number type

// 2
// function log(message: string, userId?: string) {
//   let time = new Date().toLocaleString()
//   console.log(time, message, userId || 'Not signed in') // Log time variable. Then log message variable. Then if userId exists - log userId, if not - log 'Not signed in' text
// }
// 
// log('Page loaded')
// log('User signed in', 'da763be')

// function log(message: string, userId = 'Not signed in') {
//   let time = new Date().toISOString()
//   console.log(time, message, userId) // Log time variable. Then log message variable. Then log userId variable
// }
// 
// log('User clicked on a button', 'da763be')
// log('User signed out')

// type Context = {
//   appId?: string
//   userId?: string
// }
// 
// function log(message: string, context: Context = {}) {
//   let time = new Date().toISOString()
//   console.log(time, message, context.userId) // Log time variable. Then log message variable. Then log context.userId variable
// }

// log('User clicked on a button', {userId: 'da763be'})

// 3
// function sum(numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0) // first time total = 0, n: each element of array. As a result we return sum of array elements
// }
// 
// console.log(sum([1, 2, 3]))

// 4
// function sumVariadic(): number {
//   return Array
//     .from(arguments)
//     .reduce((total, n) => total + n, 0)
// }
// 
// console.log(sumVariadic(1, 2, 3)) // error, unsecure way, expected 0 arguments

// 5
// function sumVariadicSafe(...numbers: number[]): number { // ...numbers parameters creates an array from arguments
//   return numbers.reduce((total, n) => total + n, 0)
// }
// 
// console.log(sumVariadicSafe(1, 2, 3))

// 6
// interface Console {
//   log(message?: any, ...optionalParams: any[]): void // ...optionalParams we can use only one and at last position
// }

// 6
// function add(a: number, b: number): number {
//   return a + b
// }
// 
// // call function in different ways
// add(10, 20)
// add.apply(null, [10, 20])
// add.call(null, 10, 20)
// add.bind(null, 10, 20)()

// 7
// let x = {
//   a() {
//     return this
//   }
// }
// console.log(x.a().a)
// console.log(x.a().a.toString())
// let a = x.a
// a()
// console.log(a.toString()) // currently I didn't get problems with this

// 8
// function fancyDate() {
//   return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}` // errors, this type any
// }
// console.log(fancyDate.call(new Date))

// fancyDate() // error, we didn't apply Date to this

// function fancyDate(this: Date) {
//   return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
// }
// console.log(fancyDate.call(new Date))
// fancyDate() // error, we didn't apply Date to this

// 9
// function* createFibonacciGenerator() { // * is function generator
//   let a = 0
//   let b = 1
//   while (true) {
//     yield a;
//     debugger
//     [a, b] = [b, a + b] // a = b, after that b = a + b
//     debugger
//     // a = 1
//     // b = 1
//     //
//     // a = 1
//     // b = 2
//     //
//     // a = 2
//     // b = 3
//     //
//     // a = 3
//     // b = 5
//     //
//     // a = 5
//     // b = 8
//   }
// }
// 
// let fibonacciGenerator = createFibonacciGenerator()
// 
// console.log(fibonacciGenerator.next())
// console.log(fibonacciGenerator.next())
// console.log(fibonacciGenerator.next())
// console.log(fibonacciGenerator.next())
// console.log(fibonacciGenerator.next())
// console.log(fibonacciGenerator.next())

// 10
// function* createNumbers(): IterableIterator<number> {
//   let n = 0
//   while (1) {
//     yield n++
//   }
// }
// 
// let numbers = createNumbers()
// console.log(numbers.next())
// console.log(numbers.next())
// console.log(numbers.next())

// 11
// let numbers = {
//   *[Symbol.iterator]() {
//     for (let n = 1; n <= 10; n++) {
//       // debugger
//       yield n
//       // debugger
//     }
//   }
// }
// let a = numbers[Symbol.iterator]();
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())

// 12
// type Log = (message: string, userId?: string) => void // function type, we write message and userId parameters and what return - void, nothing
// 
// let log: Log = (
//   message,
//   userId = 'Not signed in'
// ) => {
//   let time =new Date().toISOString()
//   console.log(time, message, userId)
// }

// log('Test', 'Test2')

// 13
// function times(
//   f: (index: number) => void, // f is arrow function with n parameter
//   n: number
// ) {
//   for (let i = 0; i < n; i++) {
//     f(i) // call arrow function with i argument
//   }
// }
// 
// times(n => console.log(n), 4)

// 14
// type Log = (message: string, userId?: string) => void // function type, we write message and userId parameters and what return - void, nothing
// type Log = {
//   (message: string, userId?: string): void // function type, we write message and userId parameters and what return - void, nothing
// }

// 15
// type Reserve = {
//   // (from: Date, to: Date, destination: string): Reservation
//   (from: Date, to: Date, destination: string): void
//   // (from: Date, destination: string): Reservation
//   (from: Date, destination: string): void
// }
// 
// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination?: string
// ) => {
//   console.log(from)
//   console.log(toOrDestination)
//   console.log(destination)
//   if (toOrDestination instanceof Date && destination !== undefined) {
// 
//   }
//   else if (typeof toOrDestination === 'string') {
// 
//   }
// }
// reserve(new Date(), new Date(2022, 1, 1), 'test')

// 16
// type WarnUser = { // currntly I don't know how to use it
//   (warning: string): void
//   wasCalled: boolean
// }

// 17
// type Filter = {
//   // (array: number[], f: (item: number) => boolean): unknown[]
//   // (array: string[], f: (item: string) => boolean): string[]
//   // (array: object[], f: (item: object) => boolean): object[]
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }
// 
// let names = [
//   {firstName: 'beth'},
//   {firstName: 'caitlyn'},
//   {firstName: 'xin'}
// ]
// let filter: Filter = (array, f) => {
//   console.log(f.toString())
//   return array
// }
// 
// let result = filter(
//   names,
//   // _ => true
//   _ => _.firstName.startsWith('b') // error, property firstName does not exist. No error if we use Generic Type
// )
// 
// console.log(result[0].firstName) // error, property firstName does not exist. No error if we use Generic Type
// 
// console.log(filter([1, 2, 3], _ => _ > 2))
// 
// console.log(filter(['a', 'b'], _ => _ !== 'b'))

// 18
// type Filter<T> = {
//   (array: T[], f: (item: T) => boolean): T[]
// }

// let filter: Filter = (array, f) => { // error, Filter requires 1 argument
//   console.log(f.toString())
//   return array
// }
// 
// type OtherFilter = Filter // error, Filter requires 1 argument

// let filter: Filter<number> = (array, f) => {
//   console.log(f.toString())
//   return array
// }
// 
// type StringFilter = Filter<string>
// 
// let stringFilter: StringFilter = (array, f) => {
//   console.log(f.toString())
//   return array
// }

// 19
// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }
// 
// let filter: Filter = (array, f) => {
//   console.log(f.toString())
//   return array
// }

// type Filter<T> = {
//   (array: T[], f: (item: T) => boolean): T[]
// }
// 
// let filter: Filter<number> = (array, f) => {
//   console.log(f.toString())
//   return array
// }

// type Filter = <T>(array: T[], f: (item: T) => boolean) => T[]
// 
// let filter: Filter = (array, f) => {
//   console.log(f.toString())
//   return array
// }

// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[]
// 
// let filter: Filter<string> = (array, f) => {
//   console.log(f.toString())
//   return array
// }

// function filter<T>(array: T[], f: (item: T) => boolean): T[] {
//   console.log(array)
//   console.log(f)
//   return array
// }

// function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     result[i] = f(array[i])
//   }
//   return result
// }

// function map<T, U>(array: T[], f: (item: T) => U): U[] {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     result[i] = f(array[i])
//   }
//   console.log(array)
//   console.log(f.toString())
// 
//   return result
// }

// let result = map(
//   ['a', 'b', 'c'],
//   _ => _ === 'a'
// )
// 
// console.log(result)

// let result = map<string, boolean>(
//   ['a', 'b', 'c'],
//   _ => _ === 'a'
// )
// 
// console.log(result)

// let result = map<string>( // error, should be 2 arguments
//   ['a', 'b', 'c'],
//   _ => _ === 'a'
// )
// 
// console.log(result)

// let result = map<string, boolean | string>(
//   ['a', 'b', 'c'],
//   _ => _ === 'a'
// )
// 
// console.log(result)

// let result = map<string, number>(
//   ['a', 'b', 'c'],
//   _ => _ === 'a' // error, should be boolean, not number type. number type in map<string, number>
// )
// 
// console.log(result)

// 20
// let promise = new Promise(resolve =>
//   resolve(45)
// )
// 
// promise.then(result =>
//   result * 4 // error, unknown type
// )

// let promise = new Promise<number>(resolve => // we use type number for Promise return
//   resolve(45)
// )
// 
// promise.then(result =>
//   result * 4
// ).then(result => {
//   console.log(result);
// });

// 21
// type MyEvent<T> = {
//   target: T
//   type: string
// }
// 
// type ButtonEvent = MyEvent<HTMLButtonElement>
// 
// let myEvent: MyEvent<HTMLButtonElement | null> = {
//   target: document.querySelector('#myButton'),
//   type: 'click'
// }
// 
// type TimedEvent<T> = {
//   event: MyEvent<T>
//   from: Date
//   to: Date
// }
// 
// function triggerEvent<T>(event: MyEvent<T>): void {
// 
// }
// 
// triggerEvent({
//   target: document.querySelector('#myButton'),
//   type: 'mouseover'
// })

// 22
// type TreeNode = {
//   value: string
// }
// type LeafNode = TreeNode & {
//   isLeaf: true
// }
// type InnerNode = TreeNode & {
//   children: [TreeNode] | [TreeNode, TreeNode]
// }
// 
// let a: TreeNode = {value: 'a'}
// let b: LeafNode = {value: 'b', isLeaf: true}
// let c: InnerNode = {value: 'c', children: [b]}
// 
// let a1 = mapNode(a, _ => _.toUpperCase())
// let b1 = mapNode(b, _ => _.toUpperCase())
// let c1 = mapNode(c, _ => _.toUpperCase())
// 
// function mapNode<T extends TreeNode>( // T is TreeNode or LeafNode or InnerNode
//   node: T,
//   f: (value: string) => string
// ): T {
//   return {
//     ...node, // send T object
//     value: f(node.value) // rewrite property value
//   }
// }
// 
// console.log(a1)
// console.log(b1)
// console.log(c1)

// const adrian = {
//     fullName: 'Adrian Oprea',
//     occupation: 'Software developer',
//     age: 31,
//     website: 'https://oprea.rocks'
// };
// 
// const bill = {
//     ...adrian,
//     fullName: 'Bill Gates',
//     website: 'https://microsoft.com'
// };
// 
// console.log(adrian)
// console.log(bill)

// 23
// type HasSides = {numberOfSides: number}
// type SidesHaveLength = {sideLength: number}
// 
// function logPerimeter<
// Shape extends HasSides & SidesHaveLength
// >(s: Shape): Shape { // this function gets s: Shape. Function should returns Shape object. Shape should have numberOfSides and sideLength properties because of &
//   console.log(s.numberOfSides * s.sideLength) // function multiple in console.log
//   return s // function returns object s without changing
// }
// 
// type Square = HasSides & SidesHaveLength
// let square: Square = {numberOfSides: 4, sideLength: 3}
// logPerimeter(square)
// console.log(logPerimeter(square))

// 24
// function call(
//   f: (...args: unknown[]) => unknown,
//   ...args: unknown[]
// ): unknown {
//   return f(...args)
// }

// function call<T extends unknown[], R>( // T should be an array
//   f: (...args: T) => R,
//   ...args: T
// ): R { // f is function fill, ...args is an array [10, 'a']
//   // console.log(f.toString())
//   // console.log(args)
//   return f(...args) // call function call, and send [10, 'a'] as arguments
// }
// 
// function fill(length: number, value: string): string[] { // length = 10, value = 'a'
//   // console.log(length)
//   // console.log(value)
//   // console.log(Array.from({length}, () => value))
//   return Array.from({length}, () => value) // creates array, 10 elements with a string
// }
// 
// call(fill, 10, 'a')
// console.log(call(fill, 10, 'a'))
// let a = call(fill, 10, 'a')
// let b = call(fill, 10) // error, should be 2 arguments
// let c = call(fill, 10, 'a', 'z') // error, should be 2 arguments

// 25
// type MyEvent<T> = {
//   target: T
//   type: string
// }

// let buttonEvent: MyEvent<HTMLButtonElement> = {
//   target: myButton,
//   type: string
// }

// type MyEvent<T = HTMLElement> = { // if we doesn't send specify type for T, we use HTMLElement by default
//   target: T
//   type: string
// }

// type MyEvent<T extends HTMLElement = HTMLElement> = { // if we doesn't send specify type for T, we use HTMLElement by default. Extends: T should be like HTMLElement

//   target: T
//   type: string
// }
// 
// let myEvent: MyEvent = {
//   target: myElement,
//   type: string
// }
// 
// type MyEvent2<
//   Type extends string,
//   Target extends HTMLElement = HTMLElement,
// > = { // if we doesn't send specify type for Target, we use HTMLElement by default. Extends: Target should be like HTMLElement
//   target: Target
//   type: Type
// }

// type MyEvent3<
//   Target extends HTMLElement = HTMLElement,
//   Type extends string,
// > = { // error, optional parameters should be last
//   target: Target
//   type: Type
// }

// Tasks in Part 4:
// 1:
// wrong, we use types in function parameters and we use types in for return function
// TypeScript always infers a function's return type. TypeScript sometimes
// infers a function's parameter types, if it can infer them from context (for
// example, if the function is a callback).
//
// 2:
// object arguments is not secure, use parameters with ... with type
// function sumVariadicSafe(...numbers: number[]): number { // ...numbers parameters creates an array from arguments
//   return numbers.reduce((total, n) => total + n, 0)
// }
// 
// console.log(sumVariadicSafe(1, 2, 3))
//
// 3:
// type Reserve = {
//   (from: Date, to: Date, destination: string): string
//   (from: Date, destination: string): string
//   (destination: string): string
// }

// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination?: string
// ) => {
// let filter: Filter = (array, f) => {
//   console.log(f.toString())
//   return array
// }
// let reserve: Reserve = (
//   fromOrDestination: Date | string,
//   toOrDestination?: Date | string,
//   destination?: string
// ) => {
//   console.log(fromOrDestination)
//   console.log(toOrDestination)
//   console.log(destination)
//   if (typeof fromOrDestination === 'string') {
//     return 'Ticket one way, without date from'
//   }
//   else if(toOrDestination instanceof Date && destination !== undefined) {
//     return 'Ticket two ways'
//   }
//   else if (typeof toOrDestination === 'string') {
//     return 'Ticket one way, with date from'
//   }
//   else {
//     return 'Error'
//   }
// }
// console.log(reserve(new Date(), new Date(2022, 1, 1), 'test'))
// console.log(reserve(new Date(), 'test'))
// console.log('test')

// 4:
// function call<T extends [unknown, string, ...unknown[]], R>(
// // function call<T extends [unknown, string], R>( // T should be an array
//   f: (...args: T) => R,
//   ...args: T
// ): R { // f is function fill, ...args is an array [10, 'a']
//   // console.log(f.toString())
//   // console.log(args)
//   return f(...args) // call function call, and send [10, 'a'] as arguments
// }
// 
// function fill(length: number, value: string): string[] { // length = 10, value = 'a'
//   // console.log(length)
//   // console.log(value)
//   // console.log(Array.from({length}, () => value))
//   return Array.from({length}, () => value) // creates array, 10 elements with a string
// }
// 
// call(fill, 10, 'a')
// console.log(call(fill, 10, 'a'))

// 5:
// type Is = {
//   (type: string, value: string): boolean
//   (type: boolean, value: boolean): boolean
// }

// type Is = {
//   // <T>(type: T, value: T): boolean
//   <T>(type: T, ...other: T[]): boolean
// }

// type Is = {
//   <T>(type: T, ...other: [T, ...T[]]): boolean // currently I can't see the difference from ...other: T[]
// }

// let is: Is = (type, ...other) => {
//   let result = other.map(function(value) {
//     // console.log('Ruslan 1')
//     // console.log(value)
//     // console.log(type)
//     // console.log('Ruslan 2')
// 
//     if (JSON.stringify(value) !== JSON.stringify(type)) {
//       return false
//     }
//     else return true
//   });
//   // console.log('Ruslan 3')
//   // console.log(result)
//   // console.log('Ruslan 3')
// 
//   if (result.includes(false)) return false
// 
//   return true
// }

// function is<T>(a: T, ...b: [T, ...T[]]): boolean {
// return b.every(_ => _ === a)
// }

// let is: Is = (type, ...other) => { // is var is waiting for 2 or more arguments
//   console.log(type)
//   console.log(other)
//   // return other.every(_ => _ === type)
//   return other.every(value => JSON.stringify(value) === JSON.stringify(type))
// }

// console.log(is('string', 'otherstring'))
// console.log(is(true, false))
// console.log(is(42, 42))
// // // console.log(is(10, 'foo')) // error, can't assign string to number
// console.log(is([1], [1], [1, 2, 3]))
// console.log(is([1], [1], [1]))
/// console.log(is([1], [1, '2'], [1], [1], [1], [1]))

// Research ...
// type RuslanTest = {(type: number, ...number2: number[]): boolean}
// let ruslanTest: RuslanTest = (number) => { // let can be without parameters in type. But if we add parameter then it should be number like in type
//   console.log(number)
//   // console.log(number2)
//   // console.log(number3)
//   // return number === number2
//   return true
// }
// 
// console.log(ruslanTest(1, 1, 1))

// let is: Is = (type, ...other) => {
//   let result = other.map(function(value) {
//     // console.log('Ruslan 1')
//     // console.log(value)
//     // console.log(type)
//     // console.log('Ruslan 2')
// 
//     if (JSON.stringify(value) !== JSON.stringify(type)) {
//       return false
//     }
//     else return true
//   });
//   // console.log('Ruslan 3')
//   // console.log(result)
//   // console.log('Ruslan 3')
// 
//   if (result.includes(false)) return false
// 
//   return true
// }

// Part 4 of book
// 1
// class Game {
//   private pieces = Game.makePieces()
//   private static makePieces() { // We can call Game.makePieces() without creating new Game
//     return [
//       new King('White', 'E', 1),
//       new King('Black', 'E', 8),
//       // new King('Black', 'J', 12), // error, argument J is not assignable to type File, 12 is not assignable to type Rank
// 
//       new Queen('White', 'D', 1),
//       new Queen('Black', 'D', 8),
// 
//       new Bishop('White', 'C', 1),
//       new Bishop('White', 'F', 1),
//       new Bishop('Black', 'C', 8),
//       new Bishop('Black', 'F', 8),
//     ]
//   }
// }
// 
// class Position {
//   constructor(
//     private file: File, // apply parametr file to this: this.file. Private makes this file be available from Position only
//     private rank: Rank
//   ) {}
//   distanceFrom(position: Position) {
//     return {
//       rank: Math.abs(position.rank - this.rank),
//       file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
//     }
//   }
// }
// 
// // class Piece {
// abstract class Piece {
//   protected position: Position // shoud be initialised here or in constructor. Protected make this position be available from Piece and children from this class
//   constructor(
//     private readonly color: Color, // readonly: can't be changed, like const
//     file: File,
//     rank: Rank
//   ) {
//     this.position = new Position(file, rank) // When we create new Piece we get arguments file and rank. And we creates new Position with thease file and rank
//   }
//   moveTo(position: Position) {
//     this.position = position
//   }
//   abstract canMoveTo(position: Position): boolean // should be emplemented in children classes
// }
// 
// class King extends Piece {
//   canMoveTo(position: Position) {
//     let distance = this.position.distanceFrom(position)
//     return distance.rank < 2 && distance.file < 2
//   }
// }
// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}
// 
// type Color = 'Black' | 'White'
// type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// console.log(new Piece('White', 'E', 1)) error, we can't create instance (object) of abstract class

// 2
// let set = new Set
// set.add(1).add(2).add(3)
// console.log(set.has(2))
// console.log(set.has(4))
// 
// class Set {
//   has(value: number): boolean {
// 
//   }
//   // add(value: number): Set {
//   add(value: number): this { // inside MutableSet class it will use MutableSet type
//   // inside Set class it will use Set type
// 
//   }
// }
// 
// class MutableSet extends Set {
//   delete(value: number): boolean {
// 
//   }
//   // add(value: number): MutableSet { // We can comment this add method because inside class Set we have method add, with type this. Inside MutableSet type will be MutableSet
// 
//   // }
// }

// 3
// type Sushi = {
//   calories: number
//   salty: boolean
//   tasty: boolean
// }

// interface Sushi {
//   calories: number
//   salty: boolean
//   tasty: boolean
// }
// 
// type Cake = {
//   calories: number
//   sweet: boolean
//   tasty: boolean
// }

// type Food = {
//   calories: number
//   tasty: boolean
// }
// 
// type Sushi = Food & {
//   salty: boolean
// }
// 
// type Cake = Food & {
//   sweet: boolean
// }

// interface Food {
//   calories: number
//   tasty: boolean
// }
// 
// interface Sushi extends Food {
//   salty: boolean
// }
// 
// interface Cake extends Food {
//   sweet: boolean
// }
// 
// type A = number // can't be written as interface
// type B = A | string // can't be written as interface

// interface A {
//   good(x: number): string
//   bad(x: number): string
// }
// 
// interface B extends A {
//   good(x: string | number): string
//   bad(x: string): string // error, number is not assignable with string
// }

// 4
// interface User {
//   name: string
// }
// 
// interface User {
//   age: number
// }
// 
// let a: User = {
//   name: 'Ashley',
//   age: 30
// }

// type User = { // error, duplicate of type User
//   name: string
// }
// 
// type User = { // error, duplicate of type User
//   age: number
// }

// interface User {
//   age: string
// }
// 
// interface User {
//   age: number // error, age must be string
// }

// interface User<Age extends number> { // error, should be identical type
//   age: Age
// }
// 
// interface User<Age extends string> {
//   age: Age
// }

// 5
// interface Animal {
//   eat(food: string): void
//   sleep(hours: number): void
// }
// 
// class Cat implements Animal {
//   eat(food: string) {
//     console.log('Ate some', food, ' . Mmm!')
//   }
//   sleep(hours: number) {
//     console.log('Slept for', hours, 'hours')
//   }
// }

// interface Animal {
//   readonly name: string
//   eat(food: string): void
//   sleep(hours: number): void
// }
// 
// interface Feline {
//   meow(): void
// }
// 
// class Cat implements Animal, Feline {
//   name = 'Whiskers'
//   eat(food: string) {
//     console.info('Ate some', food, '. Mmm!')
//   }
//   sleep(hours: number) {
//     console.info('Slept for', hours, 'hours')
//   }
//   meow() {
//     console.log('Meow')
//   }
// }

// 6
// class Zebra {
//   trot() {
//     console.log('zebra')
//   }
// }
// 
// class Poodle {
//   trot() {
//     console.log('poodle')
//   }
// }
// 
// function ambleAround(animal: Zebra) { // no error, because TypeScript checks by structure. Poodle has trot, so OK
//   animal.trot()
// }
// 
// let zebra = new Zebra
// let poodle = new Poodle
// 
// ambleAround(zebra)
// ambleAround(poodle)

// class A {
//   private x = 1
// }
// 
// class B extends A {}
// function f(a: A) {
//   console.log(a.x) // error, property x is private
// }
// f(new A)
// f(new B)
// f({x: 3}) // error, property x is private

// 7
// type a = number
// interface b {
//   (): void
// }
// 
// let a: a = 1999
// function b() {}
// 
// if (a + 1 > 3) {}
// let x: a = 3
// 
// class C {}
// let c: C = new C
// 
// enum E {F, G}
// let e: E = E.F

// type State = {
//   [key: string]: string // we can add a lot properties with string key like 'text'. It is equal to string like 'text'
// }
// 
// class StringDatabase {
//   constructor(public state: State = {}) {}
//   get(key: string): string | null {
//     return key in this.state ? this.state[key] : null
//   }
//   set(key: string, value: string): void {
//     this.state[key] = value
//   }
//   static from(state: State) {
//     let db = new StringDatabase
//     for (let key in state) {
//       db.set(key, state[key])
//     }
//     return db
//   }
// }
// 
// interface StringDatabase {
//   state: State
//   get(key: string): string | null
//   set(key: string, value: string): void
// }
// 
// interface StringDatabaseConstructor {
//   new(state?: State): StringDatabase
//   from(state: State): StringDatabase
// }

// Currently can not debug StringDatabaseConstructor, StringDatabase, State

// 8
// interface MyMap<K, V> {
//   get(key: K): V
//   set(key: K, value: V): void
// }
// 
// class MyMap<K, V> {
//   constructor(initialKey: K, initialValue: V) {
// 
//   }
//   get(key: K): V {
// 
//   }
//   set(key: K, value: V): void {
// 
//   }
//   merge of<K, V>(k: K, v: V): MyMap<K, V> {
// 
//   }
//   static of<K, V>(k: K, v: V): MyMap<K, V> {
// 
//   }
// }
// 
// let a = new MyMap<string, number>('k', 1)
// let b = new MyMap('k', true)
// 
// a.get('k')
// b.set('k', false)

// Currently can not debug. Errors

// 9
// type ClassConstructor = new(...args: any[]) => {}
// type ClassConstructor<T> = new(...args: any[]) => T
// 
// function withEZDebug<C extends ClassConstructor<{
//   getDebugValue(): object
// }>>(Class: C) {
//   return class extends Class {
//     // constructor(...args: any[]) {
//     //   super(...args)
//     // }
//     debug() {
//       let Name = Class.constructor.name
//       console.log(Object.getOwnPropertyNames(Class.constructor))
//       let value = this.getDebugValue()
//       return Name + '(' + JSON.stringify(value) + ')'
//     }
//   }
// }
// 
// class HardToDebugUser {
//   constructor(
//     private id: number,
//     private firstName: string,
//     private lastName: string
//   ) {}
//   getDebugValue() {
//     return {
//       id: this.id,
//       name: this.firstName + ' ' + this.lastName
//     }
//   }
// }
// 
// let User = withEZDebug(HardToDebugUser) // Add debug method to HardToDebugUser
// let user = new User(3, 'Emma', 'Gluzman') // Create object user from HardToDebugUser class plus debug method
// console.log(user.debug()) // Debug method reads Class.constructor.name and getDebugValue method

// 10
// @serializable
// class APIPayload {
//   getValue(): Payload {
//     let a: any = 'returned value'
//     return a
//   }
// }

// 11
// let APIPayload = serializable(class APIPayload {
//   getValue(): Payload {
//     let a: any
//     return a
//   }
// })

// 12
// type ClassConstructor<T> = new(...args: any[]) => T
// 
// function serializable<
//   T extends ClassConstructor<{
//     getValue(): Payload
//   }>
// >(Constructor: T) {
//   return class extends Constructor {
//     serialize() {
//       return this.getValue().toString()
//     }
//   }
// }
// 
// class Payload {}

// let payload = new APIPayload
// let serialized = payload.serialize() // error, property serialize does not exist at APIPayload
// console.log(serialized)

// let DecoratedAPIPayload = serializable(APIPayload)
// let payload = new DecoratedAPIPayload
// console.log(payload.serialize()) // Use serialize at decorator. Inside serialize we call getValue from APIPayload

// 13
// class MessageQueue {
//   private constructor(private messages: string[]) {}
//   static create(messages: string[]) {
//     return new MessageQueue(messages)
//   }
// }

// class BadQueue extends MessageQueue {} // error, can not extend
// new MessageQueue([]) // error, constructor is private
// MessageQueue.create([]) // we can use create method

// 14
// type Shoe = {
//   purpose: string
// }
// 
// class BalletFlat implements Shoe {
//   purpose = 'dancing'
// }
// 
// class Boot implements Shoe {
//   purpose = 'woodcutting'
// }
// 
// class Sneaker implements Shoe {
//   purpose = 'walking'
// }
// 
// let Shoe = {
//   create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
//     switch (type) {
//       case 'balletFlat': return new BalletFlat
//       case 'boot': return new Boot
//       case 'sneaker': return new Sneaker
//     }
//   }
// }
// 
// console.log(Shoe.create('boot')) // Creates object of Boot class

// 15
// class RequestBuilder {
//   private data: object | null = null
//   private method: 'get' | 'post' | null = null
//   private url: string | null = null
// 
//   setMethod(method: 'get' | 'post'): this {
//     this.method = method
//     return this
//   }
//   setData(data: object): this {
//     this.data = data
//     return this
//   }
//   setURL(url: string): this {
//     this.url = url
//     return this
//   }
// 
//   send() {
// 
//   }
// }

// Excersises for Part 5
//
// 1. What’s the difference between a class and an interface?
// My answear: We can not create object from interface
/* A class can have implementations, initialized class fields, and visibility modifiers. It also generates JavaScript code, so it supports instanceof checks at runtime. A class defines both a type and a value. An interface just defines a type, doesn't generate any JavaScript code, can only contain type-level members, and can't contain use modifiers. */
//
// 2. When you mark a class' constructor as `private`, that means you can't instantiate or extend the class. What happens when you mark it as `protected` instead? Play around with this in your code editor, and see if you can figure it out.
// My answear: We can use protect methods inside subclasses
// class A {
//   protected constructor() {}
// }
// 
// class B extends A {} // ok
// new A() // error
// new B() // error
/* Unlike a class with a private constructor, a class with a protected constructor can be extended. Neither a class with a private constructor nor a class with a protected constructor can be new-ed. */

// 3. Extend the Factory Pattern implementation we developed (Factory Pattern) to make it safer, at the expense of breaking the abstraction a bit. Update the implementation so that a consumer knows at compile time that calling Shoe.create('boot') returns a Boot, and Shoe.create('balletFlat') returns a BalletFlat (rather than both returning a Shoe). Hint: Think back to [function-overloads].

// type Shoe = {
//   purpose: string
// }
// 
// class BalletFlat implements Shoe {
//   purpose = 'dancing'
// }
// 
// class Boot implements Shoe {
//   purpose = 'woodcutting'
// }
// 
// class Sneaker implements Shoe {
//   purpose = 'walking'
// }
// 
// type ShoeCreator = {
//   create(type: 'balletFlat'): BalletFlat
//   create(type: 'boot'): Boot
//   create(type: 'sneaker'): Sneaker
// }

// let Shoe = {
//   create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
//     switch (type) {
//       case 'balletFlat': return new BalletFlat
//       case 'boot': return new Boot
//       case 'sneaker': return new Sneaker
//     }
//   }
// }

// let Shoe: ShoeCreator = {
//   create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
//     switch (type) {
//       case 'balletFlat':
//         return new BalletFlat()
//       case 'boot':
//         return new Boot()
//       case 'sneaker':
//         return new Sneaker()
//     }
//   }
// }
// 
// console.log(Shoe.create('balletFlat')) // BalletFlat
// console.log(Shoe.create('boot')) // Boot
// console.log(Shoe.create('sneaker')) // Sneaker
// Currently I do not see the difference of the console.log result

// 4. [Hard] As an exercise, think about how you might design a typesafe builder pattern. Extend the Builder pattern Builder Pattern example from earlier in this chapter to:

// 4a. Guarantee at compile time that someone can’t call .send() before setting at least URL and method. Would it be easier to make this guarantee if you also force the user to call methods in a specific order? (Hint: what can you return instead of this?)

// class RequestBuilder {
//   protected data: object | null = null
//   protected method: 'get' | 'post' | null = null
//   protected url: string | null = null
// 
//   setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
//     return new RequestBuilderWithMethod().setMethod(method).setData(this.data)
//   }
//   setData(data: object | null): this {
//     this.data = data
//     return this
//   }
// }
// 
// class RequestBuilderWithMethod extends RequestBuilder {
//   setMethod(method: 'get' | 'post' | null): this {
//     this.method = method
//     return this
//   }
//   setURL(url: string): RequestBuilderWithMethodAndURL {
//     return new RequestBuilderWithMethodAndURL()
//       .setMethod(this.method)
//       .setURL(url)
//       .setData(this.data)
//   }
// }
// 
// class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod {
//   setURL(url: string): this {
//     this.url = url
//     return this
//   }
//   send() {
//     // ...
//   }
// }
// 
// new RequestBuilder()
//   .setMethod('get')
//   .setData({})
//   .setURL('foo.com')
//   .send()

// 4b. [Harder] How would you change your design if you wanted to make this guarantee, but still let people call methods in any order?
// interface BuildableRequest {
//   data?: object
//   method: 'get' | 'post'
//   url: string
// }
// 
// class RequestBuilder2 {
//   data?: object
//   method?: 'get' | 'post'
//   url?: string
// 
//   setData(data: object): this & Pick<BuildableRequest, 'data'> {
//     return Object.assign(this, {data})
//   }
// 
//   setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
//     return Object.assign(this, {method})
//   }
// 
//   setURL(url: string): this & Pick<BuildableRequest, 'url'> {
//     return Object.assign(this, {url})
//   }
//   build(this: BuildableRequest) {
//     return this
//   }
// }
// 
// new RequestBuilder2()
//   .setData({})
//   .setMethod('post') // Try removing me!
//   .setURL('bar') // Try removing me!
//   .build()

// Part 6

// 1
// type ExistingUser = {
//   id: number // (number) is subtype of (number | undefined)
//   name: string
// }
// 
// type NewUser = {
//   name: string
// }
// 
// function deleteUser(user: {id?: number, name: string}) { // id has type (number | undefined) is supertype of (number)
//   delete user.id
// }
// 
// let existingUser: ExistingUser = {
//   id: 123456,
//   name: 'Ima User'
// }
// 
// deleteUser(existingUser)
// // console.log(user)
// console.log(existingUser)
// 
// deleteUser(existingUser) // In this case existingUser does not have id. But it is not an error
// console.log(existingUser)

// 2
// type LegacyUser = {
//   id?: number | string
//   name: string
// }
// 
// let legacyUser: LegacyUser = {
//   // id: '793331',
//   id: 793331,
//   name: 'Xin Yang'
// }
// 
// function deleteUser(user: {id?: number, name: string}) { // id has type (number | undefined) is subtype of (string | number | undefined). Its an error. Function should be supertype
//   delete user.id
// }
// 
// deleteUser(legacyUser)

// 3
// class Animal {}
// 
// class Bird extends Animal { // Bird is supertype of Animal
//   chirp() {}
// }
// 
// class Crow extends Bird { // Crow is subtype of Bird and Animal
//   caw() {}
// }
// 
// function chirp(bird: Bird): Bird {
//   bird.chirp()
//   return bird
// }
// 
// chirp(new Animal) // error, we not allow supertype of bird
// chirp(new Bird) // we allow type bird
// chirp(new Crow) // we allow subtype of bird

// 4
// function clone(f: (b: Bird) => Bird): void {
// 
// }

// function birdToBird(b: Bird): Bird {
//   return new Bird
// }
// clone(birdToBird)
// 
// function birdToCrow(b: Bird): Crow {
//   return new Crow
// }
// clone(birdToCrow)
// 
// function birdToAnimal(b: Bird): Animal {
//   return new Animal
// }
// clone(birdToAnimal) // error, Animal is supertype of Bird. We do not allow supertype in return function
// 
// function clone(f: (b: Bird) => Bird): void {
//   let parent = new Bird
//   let babyBird = f(parent)
//   babyBird.chirp() // We do not have chirp method at supertype Animal
// }
// 
// function animalToBird(a: Animal): Bird {
//   return new Bird
// }
// clone(animalToBird)
// 
// function crowToBird(c: Crow): Bird {
//   c.caw()
//   return new Bird
// }
// clone(crowToBird) // error, we do not allow Crow subtype in parametr function, only Bird type or Animal supertype. clone required parameter Bird type without a caw method. Crow type has a caw method and can use it in crowToBird function. But we do not allow it at clone parameters

// 5
// let a = 'x' // string
// let b = 3 // number
// var c = true // boolean
// const d = {x: 3} // {x: number}
// 
// enum E {X, Y, Z}
// let e = E.X // E

// 6
// const a = 'x' // 'x'
// const b = 3 // 3
// const c = true // true
// enum E {X, Y, Z}
// const e = E.X // E.X

// 7
// let a: 'x' = 'x' // 'x'
// let b: 3 = 3 // 3
// var c: true = true // true
// const d: {x: 3} = {x: 3} // {x: 3}
// 
// enum E {X, Y, Z}
// let e = E.X // E

// 8
// const a = 'x' // 'x'
// let b = a // string, TypeScript extends the type from 'x' to string
// 
// const c: 'x' = 'x' // 'x'
// let d = c // 'x', TypeScript does not extend type because we've anotated 'x' type

// 9
// let a = null // any
// a = 3 // any
// a = 'b' // any

// 10
// function x() {
//   let a = null // any
//   a = 3 // any
//   a = 'b' // any
//   return a
// }

// x() // string, TypeScript assigns the type string by 'b' value out of the function

// 11
// let a = {x: 3} // {x: number}
// let b: {x: 3} // {x: 3}
// let c = {x: 3} as const // {readonly x: 3} // Type can not be changed, narrow type

// 12
// let d = [1, {x: 2}] // (number | {x: number})[]
// const dd = [1, {x: 2}] // (number | {x: number})[] // type with const the same as let
// let e = [1, {x: 2}] as const // readonly [1, {readonly x: 2}] // Type can not be changed, inside too, narrow type
// const ee = [1, {x: 2}] as const // readonly [1, {readonly x: 2}] // type with const the same as let

// 13
// type Options = {
//   baseURL: string
//   cacheSize?: number
//   tier?: 'prod' | 'dev'
// }
// 
// class API {
//   constructor (private options: Options) {}
// }
// 
// new API({
//   baseURL: 'https://api.mysite.com',
//   tier: 'prod'
// })
// 
// new API({
//   baseURL: 'https://api.mysite.com',
//   // tierr: 'prod' // error, property tierr is not exist in Options
// })
// 
// new API({
//   baseURL: 'https://api.mysite.com',
//   // badTier: 'prod' // error, property badTier is not exist in Options
// })
// 
// new API({
//   baseURL: 'https://api.mysite.com',
//   badTier: 'prod'
// } as Options)
// 
// let badOptions = {
//   baseURL: 'https://api.mysite.com',
//   badTier: 'prod'
// }
// new API(badOptions)
// 
// let options: Options = {
//   baseURL: 'https://api.mysite.com',
//   // badTier: 'prod' // error, property badTier is not exist in Options
// }
// 
// new API(options)

// 14
// type Unit = 'cm' | 'px' | '%'
// let units: Unit[] = ['cm', 'px', '%']
// 
// function parseUnit(value: string): Unit | null {
//   for (let i = 0; i < units.length; i++) {
//     if (value.endsWith(units[i])) { // If string ends with one of units value, so return this units value
//       return units[i]
//     }
//   }
//   return null
// }
// 
// type Width = {
//   unit: Unit,
//   value: number
// }
// 
// function parseWidth(width: number | string | null | undefined): Width | null {
//   if (width == null) {
//     return null
//   }
// 
//   if (typeof width === 'number') {
//     return {unit: 'px', value: width}
//   }
//   let unit = parseUnit(width)
//   if (unit) {
//     return {
//       unit, // short form: property name unit, value from value variable
//       value: parseFloat(width) // property name value, value get number from width value variable
//     }
//   }
// 
//   return null
// }
// 
// // console.log(parseUnit('10 px'))
// console.log(parseWidth('10 px'))

// 15
// type UserTextEvent = {value: string}
// type UserMouseEvent = {value: [number, number]}
// 
// type UserEvent = UserTextEvent | UserMouseEvent
// 
// function handle(event: UserEvent) {
//   if (typeof event.value === 'string') {
//     // event.value
//     return 'It is text event'
//   }
//   // event.value
// 
//   return 'It is mouse event'
// }
// 
// console.log(handle({value: 'test'}))
// console.log(handle({value: [100, 200]}))

// 16
// type UserTextEvent = {value: string, target: HTMLInputElement, test: [string]}
// type UserMouseEvent = {value: [number, number], target: HTMLElement, test: [number]}
// 
// type UserEvent = UserTextEvent | UserMouseEvent
// 
// function handle(event: UserEvent) {
//   if (typeof event.value === 'string') {
//     console.log(event.value) // string
//     console.log(event.target) // HTMLInputElement | HTMLElement
//     console.log(event.test) // [string] | [number]
//     return 'It is text event'
//   }
//   console.log(event.value) // [number, number]
//   console.log(event.target) // HTMLInputElement | HTMLElement
//   console.log(event.test) // [string] | [number]
//   return 'It is mouse event'
// }

// We checked type of event.value, so TypeScript knows that inside if event.value type is string, out of if event.value type is [number, number]. But TypeScript does not know event.target and event.test

// 17
// type UserTextEvent = {type: 'TextEvent', value: string, target: HTMLInputElement} // type can be with another name, it stores special string - tag, it can be with another name too
// type UserMouseEvent = {type: 'MouseEvent', value: [number, number], target: HTMLElement} // type can be with another name, it stores special string - tag, it can be with another name too
// 
// type UserEvent = UserTextEvent | UserMouseEvent
// 
// function handle(event: UserEvent) {
//   if (event.type === 'TextEvent') {
//     console.log(event.value) // string
//     console.log(event.target) // HTMLInputElement
//     return 'It is text event'
//   }
//   console.log(event.value) // [number, number]
//   console.log(event.target) // HTMLElement
//   return 'It is mouse event'
// }

// We checked special string - tag, not type. TypeScript knows all types of all properties

// 18
// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
// type Day = Weekday | 'Sat' | 'Sun'
// 
// function getNextDay(w: Weekday): Day { // error, lack ending. We can set return type Day | undefined
//   switch (w) {
//     case 'Mon': return 'Tue'
//   }
//   // return 'Tue' // We can add return for other cases
// }

// 19
// function isBig(n: number) {
//   if (n >= 100) {
//     return true
//   }
// }

// 20
// let nextDay = {
//   Mon: 'Tue'
// }
// 
// console.log(nextDay.Mon)

// 21
// let test = async () => {
//   type APIResponse = {
//     user: {
//       userId: string
//       friendList: {
//         count: number
//         friends: {
//           firstName: string
//           lastName: string
//         }[]
//       }
//     }
//   }
// 
//   // type APIResponse = {
//   //   user: {
//   //     userId: string
//   //     friendList: FriendList
//   //   }
//   // }
// 
//   function getAPIResponse(): Promise<APIResponse> {
//     let testUser = {
//       user: {
//         userId: '1X',
//         friendList: {
//           count: 123,
//           friends: [
//             {
//               firstName: 'Ruslan',
//               lastName: 'Malovichko'
//             }
//           ]
//         }
//       }
//     }
// 
//     debugger
// 
//     console.log('ruslan-1')
// 
//     return new Promise((resolve, reject) => {
//       console.log('ruslan-2')
//       setTimeout(function(){
//         console.log('ruslan-3')
//         resolve(testUser)
//       }, 2000);
//     });
//   }
// 
//   // type FriendList = {
//   //   count: number
//   //   friends: {
//   //     firstName: string
//   //     lastName: string
//   //   }[]
//   // }
// 
//   type FriendList = APIResponse['user']['friendList']
//   type Friend = FriendList['friends'][number] // number is way for connection to array
//   type ResponseKeys = keyof APIResponse // 'user'
//   type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
//   type FriendListKeys = keyof APIResponse['user']['friendList'] // 'count' | 'friends'
// 
//   // function renderFriendList(friendList: unknown) {
//   function renderFriendList(friendList: FriendList) {
// 
//   }
// 
//   let response = await getAPIResponse()
//   console.log(response)
//   debugger
//   renderFriendList(response.user.friendList)
// }
// 
// test()

// 22
// function get<
//   O extends object,
//   K extends keyof O
// >(
//   o: O,
//   k: K
// ): O[K] {
//   return o[k]
// } // functions gets object and name of the object method. Function returns the value of object method
// 
// type ActivityLog = {
//   lastEvent: Date
//   events: {
//     id: string
//     timestamp: Date
//     type: 'Read' | 'Write'
//   }[]
// }
// 
// let activityLog: ActivityLog = {
//   lastEvent: new Date('2021-01-01'),
//   events: [
//     {
//       id: '1X',
//       timestamp: new Date('2021-01-01'),
//       type: 'Read'
//     }
//   ]
// }
// let lastEvent = get(activityLog, 'lastEvent')
// console.log(lastEvent)

// 23
// type Get = {
//   <
//     O extends object,
//     K1 extends keyof O
//   >(o: O, k1: K1): O[K1]
//   <
//     O extends object,
//     K1 extends keyof O,
//     K2 extends keyof O[K1]
//   >(o: O, k1: K1, k2: K2): O[K1][K2]
//   <
//     O extends object,
//     K1 extends keyof O,
//     K2 extends keyof O[K1],
//     K3 extends keyof O[K1][K2]
//   >(o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3]
// }
// 
// let get: Get = (object: any, ...keys: string[]) => { // object stores activityLog variable. keys stores an array with 'events', 0, 'type' values
//   let result = object
//   // keys.forEach(k => result = result[k])
//   keys.forEach(function(k) { // each iteration assigns to result value from next key
//     result = result[k]
//   })
// 
//   return result
// }
// 
// console.log(get(activityLog, 'events', 0, 'type'))
// get(activityLog, 'bad') // error, we can not set 'bad' as a keyof ActivityLog

// 24
// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
// type Day = Weekday | 'Sat' | 'Sun'

// let nextDay: Record<Weekday, Day> = { // Record first arguments is keys of methods that should be inside object. Record second argument is types of methods value that should be inside object.
//   Mon: 'Tue',
//   Tue: 'Wed',
//   Wed: 'Thu',
//   Thu: 'Fri',
//   Fri: 'Sat'
// }

// 25
// let nextDay: {[K in Weekday]: Day} = { // This type requires all Weekday values is keys of methods that should be inside object.
//   Mon: 'Tue',
//   Tue: 'Wed',
//   Wed: 'Thu',
//   Thu: 'Fri',
//   Fri: 'Sat'
// }

// type MyMappedType = { // It is example of structure
//   [Key in UnionType]: ValueType
// }

// 26
// type Record<K extends keyof any, T> = { // It is example of structure. Record first arguments is keys of methods that should be inside object. Record second argument is types of methods value that should be inside object.
//   [P in K]: T
// }

// 27
// type Account = {
//   id: number
//   isEmployee: boolean
//   notes: string[]
// }
// 
// type OptionalAccount = {
//   [K in keyof Account]?: Account[K]
// }
// 
// type NullableAccount = {
//   [K in keyof Account]: Account[K] | null
// }
// 
// type ReadonlyAccount = {
//   readonly [K in keyof Account]: Account[K]
// }
// 
// type Account2 = {
//   -readonly [K in keyof ReadonlyAccount]: Account[K]
// }
// 
// type Account3 = {
//   [K in keyof OptionalAccount]-?: Account[K]
// }
// 
// let account: Account = {
//   id: 1,
//   isEmployee: true,
//   notes: ['Note 1']
// }
// 
// account.id = 2
// 
// let optionalAccount: OptionalAccount = {
// 
// }
// 
// let nullableAccount: NullableAccount = {
//   id: null,
//   isEmployee: null,
//   notes: null
// }
// 
// let readonlyAccount: ReadonlyAccount = {
//   id: 1,
//   isEmployee: true,
//   notes: ['Note 1']
// }
// 
// // readonlyAccount.id = 2 // error, id is readonly
// 
// let account2: Account2 = {
//   id: 1,
//   isEmployee: true,
//   notes: ['Note 1']
// }
// 
// account2.id = 2
// 
// let account3: Account3 = {
//   id: 1,
//   isEmployee: true,
//   notes: ['Note 1']
// }
// 
// account3.id = 2

// 28 From documentation about Utility Types: Pick
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }
// 
// type TodoPreview = Pick<Todo, "title" | "completed">; // Pick gets title and completed methods from Todo
// 
// let todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   // description: 'test' // error, description does not exist in type 'TodoPreview'
// };
// 
// console.log(todo)

// 29
// type Currency = {
//   unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
//   value: number
// }
// 
// let Currency: any = { // error, variable does not have a type. To fix it, I set type any
//   DEFAULT: 'USD',
//   from(value: number, unit = Currency.DEFAULT): Currency { // We can use Currency.from for creating object
//     return {unit, value}
//   }
// }
// 
// let amountDue: Currency = {
//   unit: 'JPY',
//   value: 83733.10
// }
// 
// let otherAmountDue = Currency.from(330, 'EUR')
// 
// console.log(otherAmountDue)

// 30
// let a = [1, true] // (number | boolean)[]

// function tuple<
//   T extends unknown[]
// >( // T is any array
//   ...ts: T
// ): T { // ts is array of values.
//   console.log(ts)
//   return ts
// }
// 
// let a = tuple(1, true) // [number, boolean]

// 31
// function isString(a: unknown): boolean {
//   return typeof a === 'string' // typeof works inside isString function only
// }
// 
// // console.log(isString('a')) // true
// // console.log(isString([7])) // false
// 
// function parseInput(input: string | number) {
//   let formattedInput: string
// 
//   // console.log(isString(input))
//   if (isString(input)) { // it returns true or false
//     // formattedInput = input.toUpperCase() // error, Property 'toUpperCase' does not exist on type 'number'. typeof does not work this because this area is outside of isString function
//   }
// }

// parseInput('Test String')

// 32
// function isString(a: unknown): a is string { // with is, typeof works inside and outside isString function
//   return typeof a === 'string'
// }
// 
// function parseInput(input: string | number) {
//   let formattedInput: string
// 
//   // console.log(isString(input))
//   if (isString(input)) { // it returns true or false
//     formattedInput = input.toUpperCase() // error, Property 'toUpperCase' does not exist on type 'number'. typeof does not work this because this area is outside of isString function
//     console.log(formattedInput)
//   }
// }
// 
// parseInput('Test String')

// 33
// type LegacyDialog = number
// type Dialog = string
// 
// function isLegacyDialog(
//   dialog: LegacyDialog | Dialog
// ): dialog is LegacyDialog { // with is, typeof works inside and outside isLegacyDialog function
// // ) {
//   return typeof dialog === 'number'
// }
// 
// function parseInput(input: string | number) {
//   let formattedInput: number
// 
//   if (isLegacyDialog(input)) { // it returns true or false
//     formattedInput = input // error, Type 'string | number' is not assignable to type 'number'. typeof does not work this because this area is outside of isLegacyDialog function
//     console.log(formattedInput)
//   }
// }
// 
// parseInput(1)

// 34
// type IsString<T> = T extends string
//   ? true
//   : false
// 
// type A = IsString<string> // true, because T extends string ? true
// type B = IsString<number> // false

// 35
// type ToArray<T> = T[]
// type A = ToArray<number> // number[]
// type B = ToArray<number | string> // (string | number)[]

// type ToArray2<T> = T extends unknown ? T[] : T[] // split types
// type ToArray2<T> = T extends string ? T[] : T[] // split types
// type A = ToArray2<number> // number[]
// type B = ToArray2<number | string> // number[] | string[]

// 36
// type Without<T, U> = T extends U ? never : T // never is not set type on T extends T case

// type A = Without<
//   boolean | number | string,
//   boolean
// > // number | string

// How TypeScript calculates this type
// type A = Without<boolean | number | string, boolean>

// type A = Without<boolean, boolean>
// | Without<number, boolean>
// | Without<string, boolean>

// type A = (boolean extends boolean ? never : boolean)
// | (number extends boolean ? never : boolean)
// | (string extends boolean ? never : boolean)

// type A = number
// | number
// | string

// type A = number | string

