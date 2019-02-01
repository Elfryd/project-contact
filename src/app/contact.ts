export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthDate: string,
    public phoneNumber: string,
    public urlImage: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.urlImage = urlImage;
  }
}
