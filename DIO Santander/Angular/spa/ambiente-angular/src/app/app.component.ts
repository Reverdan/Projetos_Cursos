import { Component, OnInit } from '@angular/core';

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
  pessoas =[
    {
      nome: "Augusto",
      sobrenome: "Soares"
    },
    {
      nome: "José",
      sobrenome: "Black"
    },
    {
      nome: "Joaquim",
      sobrenome: "Ourives"
    }
  ];

  constructor()
  {

  }

  ngOnInit(): void 
  {
    console.log(this.pessoas);
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
}
