import { PersonModel } from '../models/person';
import { EmployeeModel } from '../models/employee'

export class Accounts {
    public create(person: PersonModel): EmployeeModel {
        const output: EmployeeModel = new EmployeeModel();

        output.FirstName = person.FirstName
        output.LastName = person.LastName
        output.Email = `${person.FirstName.charAt(0)}.${person.LastName}@ocp.com`

        return output
    }
}
