import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  count: number = 0;
  nome: string = 'Reverdan Almeida Sparinger';
  text: string = '';
  // pessoas = 
  // [
  //   {
  //     firstName: '',
  //     lastName: '',
  //     age: 0
  //   }
  // ];
  pes = new PeopleService();
  listPessoas = new Array();

  constructor()
  {
  }

  ngOnInit(): void 
  {
    // this.getPeople();
    this.listPessoas = this.pes.getLista();
    // this.listPessoas = peopleService.getLista();
    // console.log(this.pessoas);
    let interval = setInterval(() => 
    {
      this.count++;
      if(this.count === 10)
        clearInterval(interval);
    }, 1000);
    
  }

  clicou(nome: string): void
  {
    this.text = nome;
    console.log('Clicou em mim', nome);
  }

  // getPeople()
  // {
  //   this.peopleService.getPeople().subscribe(people => 
  //     {
  //       this.pessoas = people;
  //     })
  // }
}
