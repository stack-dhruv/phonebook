import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent implements OnInit {
  persons: any;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.readDatabase().subscribe((data) => {
      console.log(data);
      this.persons = data;
    });
  }
}
