import { ExecutiveAccounts } from '../controllers/executive-account';
import { IApplicantModel } from '../Iapplicant';
import { IAccounts } from '../interfaces/Iaccount';

export class ExecutiveModel implements IApplicantModel {
    public FirstName: string;
    public LastName: string;
    public AccountProcessor: IAccounts;

    constructor(firstName = '', lastName = '') {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.AccountProcessor = new ExecutiveAccounts();
    }
}
