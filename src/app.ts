// 1
// let a = 1 + 2
// let b = a + 3
// let c = {
//   apple: a,
//   banana: b
// }
// let d = c.apple * 4
// let e = 'Test' + []

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
// type Log = (message: string, userId?: string) => void // function type, we write message and userId parametrs and what return - void, nothing
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
//   f: (index: number) => void, // f is arrow function with n parametr
//   n: number
// ) {
//   for (let i = 0; i < n; i++) {
//     f(i) // call arrow function with i argument
//   }
// }
// 
// times(n => console.log(n), 4)

// 14
// type Log = (message: string, userId?: string) => void // function type, we write message and userId parametrs and what return - void, nothing
// type Log = {
//   (message: string, userId?: string): void // function type, we write message and userId parametrs and what return - void, nothing
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

function call<T extends unknown[], R>(
  f: (...args: T) => R,
  ...args: T
): R { // f is function fill, ...args is an array [10, 'a']
  // console.log(f.toString())
  // console.log(args)
  return f(...args) // call function call, and send [10, 'a'] as arguments
}

function fill(length: number, value: string): string[] { // length = 10, value = 'a'
  // console.log(length)
  // console.log(value)
  // console.log(Array.from({length}, () => value))
  return Array.from({length}, () => value) // creates array, 10 elements with a string
}

call(fill, 10, 'a')
// console.log(call(fill, 10, 'a'))

// let length2 = 10
// let value = 'a'
// console.log(Array.from({length2}, () => value))

