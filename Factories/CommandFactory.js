import { Addition }         from "../Executors/AdditionExecutor.js"
import { Substraction }     from "../Executors/SubstractionExecutor.js"

class Factory {

    // constructor() {

    // }

    _list = {
        "+" : Addition,
        "-" : Substraction
    }

    _createCommand(command) {
        const Cmd = this._list[command[0]]
        const cmd = new Cmd(command)
        return cmd
        
    }

    createCommands(listOfCommands) {
        const insidefactory = new Factory()
        let commands = []
        for (let i = 0; i < listOfCommands.cmdList.length; i++) {
            commands[i] = insidefactory._createCommand(listOfCommands.cmdList[i])
        }
        return commands
    }
}


export { Factory }