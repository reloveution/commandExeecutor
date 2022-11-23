'use strict'
console.clear()

import { Model } from "./Models/CommandModel.js"

const listOfCommands = Model.create([['+',2,3], ['-',7,2]])

console.log(listOfCommands)

import { Factory } from "./Factories/CommandFactory.js"
const factory = new Factory()

const commands = factory.createCommands(listOfCommands)
console.log(commands[0])

import { QueueHandler } from "./Handlers/QueueHandler.js"

const queueHandler = new QueueHandler()

queueHandler.run(commands)

