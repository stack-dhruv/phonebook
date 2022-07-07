import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { PersonModel } from 'src/app/model/person';
{
  /**
Service is used as the API caller
*/
}
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  readDatabase(): Observable<any> {
    return this.http.get<any>(BASE_URL + '/api/phonebook');
  }

  addToDatabase(data: PersonModel): Observable<any> {
    return this.http.post<any>(BASE_URL + '/api/phonebook', data);
  }
}
