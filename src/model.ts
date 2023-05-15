export class Employee {
    code: number 
    name: string

    constructor(code: number, name: string) {
        this.code = code
        this.name = name
    }

    displayEmployee() {
        console.log("Employee code" + this.code + "employee name" + this.name)
    }
}