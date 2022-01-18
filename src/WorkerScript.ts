// Can not run
// onmessage = e => {
//   console.log(e.data)
//   postMessage(Ack: "${e.data}")
// }
// 
// type Command =
//   | {type: 'sendMessageToThread', data: [ThreadID, Message]}
//   | {type: 'createThread', data: [Participants]}
//   | {type: 'addUserToThread', data: [ThreadID, UserID]}
//   | {type: 'removeUserFromThread', data: [ThreadID, UserID]}
// onmessage = e => processCommandFromMainThread(e.data)
// function processCommandFromMainThread(
// command: Command
// ) {
//   switch (command.type) {
//     case 'sendMessageToThread':
//       let [threadID, message] = command.data
//       console.log(message)
//   }
// }
// 
// type Commands = {
//   sendMessageToThread: [ThreadID, Message]
//   createThread: [Participants]
//   addUserToThread: [ThreadID, UserID]
//   removeUserFromThread: [ThreadID, UserID]
// }
// type Events = {
//   receivedMessage: [ThreadID, UserID, Message]
//   createdThread: [ThreadID, Participants]
//   addedUserToThread: [ThreadID, UserID]
//   removedUserFromThread: [ThreadID, UserID]
// }
// // Прослушивание событий, поступающих из главного потока.
// let commandEmitter = new SafeEmitter <Commands>()
// // Отправка событий обратно в главный поток.
// let eventEmitter = new SafeEmitter <Events>()
// // Обертывание команд, поступающих от главного потока,
// // с помощью типобозопасного отправителя событий.
// onmessage = command =>
// commandEmitter.emit(
// command.data.type,
// ...command.data.data
// )
// // Прослушивание событий, созданных работником, и отправка их
// // обратно главному потоку.
// eventEmitter.on('receivedMessage', data =>
// postMessage({type: 'receivedMessage', data})
// )
// eventEmitter.on('createdThread', data =>
// postMessage({type: 'createdThread', data})
// )
// // и т.д.
// // Ответ на команду из главного потока sendMessageToThread
// commandEmitter.on('sendMessageToThread', (threadID, message) =>
// console.log(OK, I will send a message to threadID ${threadID})
// )
// // Отправка события обратно главному потоку.
// eventEmitter.emit('createdThread', 123, [456, 789])

// Part 8 Exercises. Can not run
// let handlers: {
//   [C in keyof MatrixProtocol]: (
//     ...args: MatrixProtocol[C]['in']
//   ) => MatrixProtocol[C]['out']
// } = {
//   determinant(matrix) {
//     return determinant(matrix)
//   },
//   ['dot-product'](a, b) {
//     return dotProduct(a, b)
//   },
//   invert(matrix) {
//     return invert(matrix)
//   }
// }
// 
// onmessage = <C extends keyof MatrixProtocol>({
//   data: {command, args}
// }: {
//   data: {command: C; args: MatrixProtocol[C]['in']}
// }) => {
//   let handler = handlers[command]
//   let result = handler(...args)
//   postMessage(result)
// }
// 
// declare function determinant(matrix: Matrix): number
// declare function dotProduct(matrixA: Matrix, matrixB: Matrix): Matrix
// declare function invert(matrix: Matrix): Matrix

