import { EmployeeModel } from "../models/employee";
import { IApplicantModel } from "./Iapplicant";

export interface IAccounts {
    create(person: IApplicantModel): EmployeeModel;
}
