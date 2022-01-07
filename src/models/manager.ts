import { IAccounts } from '../interfaces/Iaccount';
import { IApplicantModel } from '../Iapplicant';
import { ManagerAccounts } from '../controllers/manager-account';

export class ManagerModel implements IApplicantModel {
    public FirstName: string;
    public LastName: string;
    public AccountProcessor: IAccounts;

    constructor(firstName = '', lastName = '') {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.AccountProcessor = new ManagerAccounts();
    }

}
