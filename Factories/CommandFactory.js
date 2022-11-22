class Factory {
    static list = {
        "+" : Addition,
        "-" : Substraction
    }

    _createCommand(command) {
        const Cmd = Factory.list[command[0]]
        const cmd = new Cmd(command)
        return cmd
        
    }

    createCommands(listOfCommands) {
        const factory = new Factory()
        const commands = []
        for (let i = 0; i < listOfCommands.length; i++) {
            commands[i] = factory._createCommand(listOfCommands[i])
        }
        return commands
    }
}


export { Factory }