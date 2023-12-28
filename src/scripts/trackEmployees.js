// Create a system that takes record of employees in a single instance

class CameInToWorkRecord {
    constructor() {
        if(CameInToWorkRecord.instance) {
            return CameInToWorkRecord.instance
        }
        CameInToWorkRecord.instance = this
        this.record = {}

    }
    signInToWork(IDNumber, name, time) {
        // let IDNumber = IDNumber
        this.record[`${IDNumber}`] = name + ' ' + time
        console.log(this.record)
    }
}

const employeeTracker = new CameInToWorkRecord()
employeeTracker.signInToWork('SOTFW-ENG-13', 'Samuel Paul', '08:00')

const employeeTrackerTwo = new CameInToWorkRecord()

console.log(employeeTrackerTwo.record.hasOwnProperty('SOTFW-ENG-13'));
