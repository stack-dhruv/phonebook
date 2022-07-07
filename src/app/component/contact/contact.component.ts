import { Component, OnInit, Output } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  persons: any[] = [];

  ngOnInit(): void {
    this.contactService.readDatabase().subscribe((data) => {
      console.log(data);
      this.persons = data;
    });
  }
}
