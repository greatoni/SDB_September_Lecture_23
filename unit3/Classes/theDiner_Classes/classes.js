/* 
    Employees
        -MAnager
        -Host
        -Server
    
        Employee Number    
    
    Table
*/

const employeeNumbers = []

class Employee {

    static setEmployee(role,name,payRate) {
        // Create a random employee number
        const setEmployeeNumber = Math.floor(Math.random()*(100-1)+1);
        let numberToUse;

        if(employeeNumbers.includes(setEmployeeNumber))
        {
            let tempNumber = this.setEmployee + "a" 
            employeeNumbers.push(tempNumber);
            numberToUse = tempNumber;
        }
        {
            employeeNumbers.push(setEmployeeNumber);
            numberToUse = setEmployeeNumber;
        }

        // Set Hire Date
        let today = new Date();
        const usedClass = role;
        
        return new usedClass(name,numberToUse,today,payRate)
    }

    constructor(name, empNumber, date, payRate) {
        this.name = name;
        this.employee_number = empNumber;
        this.dateHired = date;
        this.payRate = Number(payRate.toFixed(2));
    }
}

class Manager extends Employee {
    constructor(name, empNumber, date, payRate) {
        super(name, empNumber, date, payRate)
        this.role = 'Manager';   
    }

    createTable(number, seats)
    {
        let table = new Table(number, seats);
        return table;
    }
}

class Host extends Employee {
    constructor(name, empNumber, date, payRate) {
        super(name, empNumber, date, payRate)
        this.role = 'Host';   
    }

    setTable(table) {
        table.updateSeating;
    }
}

class Server extends Employee {
    constructor(name, empNumber, date, payRate) {
        super(name, empNumber, date, payRate)
        this.role = 'Server';   
    }
}

const manager = Employee.setEmployee(Manager, 'Jane', 21)
const server = Employee.setEmployee(Host, 'Steven', 21)
const host = Employee.setEmployee(Server, 'Travis', 21)

class Table {
    constructor(tableNum, seatNum) {
        this.tableNumber = tableNum;
        this.seatNumber = seatNum;
        this.seated = false;
        this.status = 'empty';
    }

    updateSeating() {
        if(this.seated) {
            this.seated = false;
            this.status = "empty"
        }
        else {
            this.seated = true;
            this.status = "waiting..."
        }
    }

    updateStatus(status) {
        if(status !== undefined) {
            this.status = status;
        } else {
            this.status = "waiting..."
        }
    }

}

const table10 = manager.createTable(10,2)
host.setTable(table10); 
console.log(table10);