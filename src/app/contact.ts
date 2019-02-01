export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public dateBirth: Date,
    public telephone: string,
    public urlImage: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateBirth = dateBirth;
    this.telephone = telephone;
    this.urlImage = urlImage;
  }
}
