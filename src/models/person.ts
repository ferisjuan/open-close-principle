import { Accounts } from '../controllers/account'
import { IAccounts } from '../interfaces/Iaccount'
import { IApplicantModel } from '../Iapplicant'
export class PersonModel implements IApplicantModel {
    public FirstName: string
    public LastName: string
    public AccountProccessor: IAccounts

    constructor(firstName = '', lastName = '') {
        this.FirstName = firstName
        this.LastName = lastName
        this.AccountProccessor = new Accounts()
    }
}
