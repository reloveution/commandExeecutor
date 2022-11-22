'use strict'
console.clear()

import { Model } from "./Models/CommandModel.js"

const listOfCommands = Model.create([['+',2,3], ['-',7,2]])

console.log(listOfCommands)

import { Addition }         from "./Executors/AdditionExecutor.js"
import { Substraction }     from "./Executors/SubstractionExecutor.js"
// const addition = new Addition()
// const substraction = new Substraction()


import { Factory } from "./Factories/CommandFactory.js"
const factory = new Factory()
const commands = factory.createCommands(listOfCommands)

import { QueueHandler } from "./Handlers/QueueHandler.js"

let queueHandler = new QueueHandler()
let results = []

for (let i = 0; i < commands.length; i++) {
    results[i] = queueHandler.run(commands[i])
}
class Show {
    static show(results) {
        for(let i = 0; i < results.length; i++) {
            console.log(results[i])
        }
    }
}

Show.show(results)

console.log(results)