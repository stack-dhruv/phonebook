export class PersonModel {
  name: string;
  age: number;
  phone_number: number;
  group: string;

  constructor(name: string, age: number, phone_number: number, group: string) {
    this.name = name;
    this.age = age;
    this.phone_number = phone_number;
    this.group = group;
  }
}
