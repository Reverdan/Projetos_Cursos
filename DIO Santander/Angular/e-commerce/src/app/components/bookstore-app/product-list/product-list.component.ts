import { Component, OnInit } from '@angular/core';
import { Book } from './product-item/model/book';
import { BookService } from './product-list.component.service';

@Component
({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit 
{
  bookService: BookService;
  livros: any;
  book: Book = {id: "1", name: "Livro", price: 150, quantity: 3, category: "Ação", img: "img1"};
  book1: Book = {id: "1", name: "Livro1", price: 235, quantity: 18, category: "Ficção", img: "img2"};

  constructor(bookService : BookService) 
  { 
    this.bookService = bookService;
    // this.book = book;
  }

  ngOnInit(): void 
  {
    // this.livros = this.bookService.getBook().subscribe(
    //   (data => 
    //     {
    //       this.livros = data;
    //       console.log(this.livros);
    //     })
    // )
    // this.book.id = "1";
    this.livros = 
    [
      this.book,
      this.book1
    ]
    console.log(this.livros);
  }

}
