import { IApplicantModel } from '../interfaces/Iapplicant'
export class PersonModel implements IApplicantModel {
    public FirstName: string
    public LastName: string

    constructor(firstName = '', lastName = '') {
        this.FirstName = firstName
        this.LastName = lastName
    }
}
