export class PersonModel {
    public FirstName: string
    public LastName: string

    constructor(firstName = '', lastName = '') {
        this.FirstName = firstName
        this.LastName = lastName
    }
}
