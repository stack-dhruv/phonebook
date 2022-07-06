import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { PersonModel } from 'src/app/model/person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  constructor(private contactSerice: ContactService) {}

  addPerson(addPersonForm: any) {
    console.log('Person adding process called');
    const person = addPersonForm;
    const data: PersonModel = new PersonModel(
      person.name,
      person.age,
      person.phone_number,
      person.group
    );

    console.log(person);

    this.contactSerice
      .addToDatabase(data)
      .subscribe((response) => {
        console.log('Data added successfully :: ');
        console.log(response);
      })
      .unsubscribe();
  }

  ngOnInit(): void {}
}
