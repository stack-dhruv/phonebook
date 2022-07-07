import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  subject = new Subject();

  setMessage(msg: any) {
    this.subject.next(msg);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() {}
}
