import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { PersonModel } from 'src/app/model/person';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  constructor(
    private contactSerice: ContactService,
    private messageService: MessageService
  ) {}

  addNewUser() {
    const thisForm = document.getElementById('thisForm');
  }

  addPerson(addPersonForm: any) {
    if (addPersonForm.valid) {
      console.log('Person adding process called');
      const person = addPersonForm.value;
      const data: PersonModel = new PersonModel(
        person.name,
        person.age,
        person.phone_number,
        person.group
      );

      console.log('Add person method from the form - ');

      this.contactSerice.addToDatabase(data).subscribe((response) => {
        this.messageService.setMessage({
          msg: 'Post is added',
          type: 'success',
        });
        console.log('Data added successfully :: ');
        console.log(response);
      });
    }
  }

  ngOnInit(): void {}
}
