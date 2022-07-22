import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable
({
  providedIn: 'root'
})
export class UserService 
{
  apiUrl = 'https://sheet.best/api/sheets/6b9b2ea2-4431-4ef7-aa6b-23a414c9e6c6';
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private httpClient: HttpClient) 
  { 

  }

  getUsers(): Observable<User[]>
  {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  postUser(user: User):Observable<User>
  {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

}
