import { IApplicantModel } from '../Iapplicant';
import { EmployeeModel } from '../models/employee'

export interface IAccounts {
    create(person: IApplicantModel): EmployeeModel
}
