import { IApplicantModel } from './Iapplicant'
import { EmployeeModel } from './models/employee'
import { PersonModel } from './models/person'

class Program {
    static main() {
        const applicants: IApplicantModel[] = [
            new PersonModel('John', 'Doe'),
            new PersonModel('Jane', 'Doe'),
            new PersonModel('John', 'Smith'),
        ]

        const employees: EmployeeModel[] = []

        applicants.forEach(person => {
            employees.push(person.AccountProcessor.create(person))
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
