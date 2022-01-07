import { Accounts } from './controllers/account'
import { EmployeeModel } from './models/employee'
import { PersonModel } from './models/person'

class Program {
    static main() {
        const applicants: PersonModel[] = [
            new PersonModel('John', 'Doe'),
            new PersonModel('Jane', 'Doe'),
            new PersonModel('John', 'Smith'),
        ]

        const employees: EmployeeModel[] = []
        const accountProcessor = new Accounts()

        applicants.forEach(person => {
            employees.push(accountProcessor.create(person))
        })

        employees.forEach(employee => {
            console.log(
                `${employee.FirstName} ${employee.LastName}: ${employee.Email} Is Manager: ${employee.isManager} Is Executive: ${employee.isExecutive}`
            )
        })

        console.log('\n\n')
    }
}

Program.main()
