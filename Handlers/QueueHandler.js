class QueueHandler {
    run(command) {
        return command._execute()
    }
}

export { QueueHandler }