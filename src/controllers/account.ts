import { EmployeeModel } from '../models/employee'
import { IApplicantModel } from '../interfaces/Iapplicant'
import { IAccounts } from '../interfaces/Iaccount'

export class Accounts implements IAccounts {
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
