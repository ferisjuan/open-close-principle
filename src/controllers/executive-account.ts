import { IApplicantModel } from '../Iapplicant';
import { IAccounts } from '../interfaces/Iaccount';
import { EmployeeModel } from '../models/employee';

export class ExecutiveAccounts implements IAccounts {
    public Create(person: IApplicantModel): EmployeeModel {
        const output: EmployeeModel = new EmployeeModel()

        output.FirstName = person.FirstName
        output.LastName = person.LastName
        output.Email = `${person.FirstName}.${
            person.LastName
        }@ocpcorp.com`

        output.isManager = true
        output.isExecutive = true

        return output
    }
}
