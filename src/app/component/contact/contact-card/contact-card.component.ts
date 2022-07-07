import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { MessageService } from 'src/app/service/message.service';
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent implements OnInit {
  @Input() person: any;

  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}
  deletePerson() {
    this.contactService.deletePerson(this.person._id).subscribe((data) => {
      console.log('User succesfully deleted');
      console.log(data);

      this.messageService.setMessage({
        msg: 'user succefully deleted',
        type: 'success',
      });
    });
  }
  ngOnInit(): void {}
}
