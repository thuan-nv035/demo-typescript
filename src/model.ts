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

export class Sale extends Employee {
    department: string

    constructor(code: number, name: string ,department: string) {
        super(code, name)
        this.department = department
    }

    display(): void {
        console.log('name: ' + this.name + ' department: ' + this.department)
    }
}