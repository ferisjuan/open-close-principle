import { IApplicantModel } from '../Iapplicant';
import { EmployeeModel } from '../models/employee'

export interface IAccounts {
    Create(person: IApplicantModel): EmployeeModel
}
