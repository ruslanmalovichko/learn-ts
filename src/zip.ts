// // declare global { // we can use global if we need it
//   interface Array<T> {
//     zip<U>(list: U[]): [T, U][]
//   }
// // }
// 
// function tuple<
//   T extends unknown[]
// >( // T is any array
//   ...ts: T
// ): T { // ts is array of values.
//   // console.log(ts)
//   return ts
// }
// 
// Array.prototype.zip = function<T, U>(
//   this: T[],
//   list: U[]
// ): [T, U][] { // this contains [ 2, 4, 6 ]. list conains [ 'a', 'b', 'c' ]
//   return this.map(function(v, k) { // v contains 2, 4, 6. k contains 0, 1, 2, list[k] contains a, b, c
//     // console.log(v)
//     // console.log(k)
//     // console.log(list[k])
//     return tuple(v, list[k]) // tuple 2, 'a' returns [ 2, 'a' ]
//   })
// 
//   // return this.map((v, k) =>
//   //   tuple(v, list[k])
//   // )
// 
//   // return this.map(function(v, k) {
//   //   return tuple(v, list[k])
//   // })
// }

