// 1 Can not run
// let worker = new
// Worker('WorkerScript.js')
// worker.onmessage = e => {
//   console.log(e.data)
// }
// worker.postMessage('some data')
// 
// type Message = string
// type ThreadID = number
// type UserID = number
// type Participants = UserID[]
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
// 
// type Commands = {
// sendMessageToThread: [ThreadID, Message]
// createThread: [Participants]
// addUserToThread: [ThreadID, UserID]
// removeUserFromThread: [ThreadID, UserID]
// }
// 
// type Events = {
// receivedMessage: [ThreadID, UserID, Message]
// createdThread: [ThreadID, Participants]
// addedUserToThread: [ThreadID, UserID]
// removedUserFromThread: [ThreadID, UserID]
// }
// let commandEmitter = new SafeEmitter
// <Commands>()
// let eventEmitter = new SafeEmitter
// <Events>()
// let worker = new Worker('WorkerScript.js')
// // Прослушивание событий, поступающих от работника,
// // и их переотправка посредством типобезопасного отправителя событий
// worker.onmessage = event =>
// eventEmitter.emit(
// event.data.type,
// ...event.data.data
// )
// // Прослушивание команд, заданных этим потоком, и их отправка работнику
// commandEmitter.on('sendMessageToThread', data =>
// worker.postMessage({type: 'sendMessageToThread', data})
// )
// commandEmitter.on('createThread', data =>
// worker.postMessage({type: 'createThread', data})
// )
// // и т.д.
// // Сделать что-либо, когда работник сообщает о создании нового потока.
// eventEmitter.on('createdThread', (threadID, participants) =>
// console.log('Created a new chat thread!', threadID, participants)
// )
// // Отправка команды работнику
// commandEmitter.emit('createThread', [123, 456])

// 2
// import {fork} from 'child_process'
// let child = fork('./ChildThread.js')
// child.on('message', data =>
//   console.info('Child process sent a message', data)
// )
// child.send({type: 'syn', data: [3]})

// Part 8 Exercises. Can not run
// type Protocol = {
//   [command: string]: {
//     in: unknown[]
//     out: unknown
//   }
// }
// 
// function createProtocol<P extends Protocol>(script: string) {
//   return <K extends keyof P>(command: K) => (...args: P[K]['in']) =>
//     new Promise<P[K]['out']>((resolve, reject) => {
//       let worker = new Worker(script)
//       worker.onerror = reject
//       worker.onmessage = event => resolve(event.data.data)
//       worker.postMessage({command, args})
//     })
// }
// 
// let runWithMatrixProtocol = createProtocol<MatrixProtocol>(
//   'MatrixWorkerScript.js'
// )
// let parallelDeterminant = runWithMatrixProtocol('determinant')
// 
// parallelDeterminant([[1, 2], [3, 4]]).then(
//   determinant => console.log(determinant) // -2
// )


