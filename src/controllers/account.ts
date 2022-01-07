import { EmployeeModel } from '../models/employee'
import { IApplicantModel } from '../interfaces/applicant'

export class Accounts {
    public create(person: IApplicantModel): EmployeeModel {
        const output: EmployeeModel = new EmployeeModel()

        output.FirstName = person.FirstName
        output.LastName = person.LastName
        output.Email = `${person.FirstName.charAt(0)}.${
            person.LastName
        }@ocp.com`

        return output
    }
}
