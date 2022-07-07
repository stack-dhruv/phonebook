import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
@Component({
  selector: 'app-global-alert',
  templateUrl: './global-alert.component.html',
  styleUrls: ['./global-alert.component.css'],
})
export class GlobalAlertComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  msg = '';
  type = '';

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((data) => {
      this.msg = data.msg;
      this.type = data.type;
    });
  }
}
