import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/service/contact.service';
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent implements OnInit {
  @Input() person: any;

  constructor(private contactService: ContactService) {}
  deletePerson() {
    this.contactService.deletePerson(this.person._id).subscribe((data) => {
      console.log('User succesfully deleted');
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
