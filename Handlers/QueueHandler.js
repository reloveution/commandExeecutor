class QueueHandler {
    run(commands) {
        for (let i = 0; i < commands.length; i++) {
            console.log(commands[i]._execute())
        }
    }


}

export { QueueHandler }