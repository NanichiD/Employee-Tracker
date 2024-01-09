const sampleEmployeeDetails = {
    IDNumber: 'SOFTW-001',
    name: 'Nanichi David',
    age: '17',
    position: 'Senior Software Engineer',
    department: 'Engineering/IT',
}
const {IDNumber, name, age, position, department} = employeeDetails

class MyEmployees {
    constructor() {
        if(MyEmployees.instance) {
            return MyEmployees.instance
        }
        this.employees = {}
        MyEmployees.instance = this
    }
    addEmployee(employeeID, name, age, position, department) {
        this.employees[`${employeeID}`] = name + '\n' + age + '\n'+ position + '\n' + department
        console.log(this.employees[`${employeeID}`])
        // console.log(this.employees)
    } 
    deleteEmployeeRecord(employeeID) {

    }
    showMeMyEmployees() {
        console.log(this.employees)
    }
}

const employeeObj = new MyEmployees()
employeeObj.addEmployee(IDNumber, name, age, position, department)
employeeObj.showMeMyEmployees()


