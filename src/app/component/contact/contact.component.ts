import { Component, OnInit, Output } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { MessageService } from 'src/app/service/message.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  persons: any[] = [];

  ngOnInit(): void {
    this.getPosts();
    this.messageService.getMessage().subscribe(() => {
      this.getPosts();
    });
  }

  getPosts() {
    this.contactService.readDatabase().subscribe((data) => {
      console.log(data);
      this.persons = data;
    });
  }
}
