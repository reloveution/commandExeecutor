export class Substraction {
    constructor(command) {
        this.value1 = command[1]
        this.value2 = command[2]
    }

    _execute() {
        return this.value1 - this.value2
    }

}