export class EmployeeModel{
    public FirstName: string
    public LastName: string
    public Email: string
    public isManager: boolean
    public isExecutive: boolean

    constructor(FirstName= '', LastName = '', Email = '', isManager = false, isExecutive = false) {
        this.FirstName = FirstName
        this.LastName = LastName
        this.Email = Email
        this.isManager = isManager
        this.isExecutive = isExecutive
    }
}
