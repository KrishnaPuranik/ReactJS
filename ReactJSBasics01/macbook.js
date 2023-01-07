import {Computer} from './computer.js'

export default class Macbook extends Computer {
    constructor(name, company) {
        super(name)
        this.company = company
    }

    logIn() {
        console.log("You are logged into a MacBook " + this.name)
    }
}

/*
We can export in this way also
*/
//export default Macbook