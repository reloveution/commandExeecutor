'use strict'

class Model {
    constructor(cmdList) {
        this.cmdList = cmdList
    }

    static create(cmdList) {
        const model = new Model(cmdList)
        return model
    }
}

export { Model }