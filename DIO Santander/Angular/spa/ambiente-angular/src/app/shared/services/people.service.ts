import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable
({
  providedIn: 'root'
})
export class PeopleService 
{

  constructor() 
  { 

  }

  getPeople(): Observable<any>
  {
    let peopleArray = 
    [
      {
        firstName: "Augusto",
        lastName: "Soares",
        age: 30
      },
      {
        firstName: "José",
        lastName: "Black",
        age: 25
      },
      {
        firstName: "Joaquim",
        lastName: "Ourives",
        age: 50
      }
    ]
    return of(peopleArray);
  }

  getLista()
  {
    let listaPessoas = 
    [
      {
        firstName: "Augusto",
        lastName: "Soares",
        age: 30
      },
      {
        firstName: "José",
        lastName: "Black",
        age: 25
      },
      {
        firstName: "Joaquim",
        lastName: "Ourives",
        age: 50
      }
    ]
    return listaPessoas;
  }
  
}
