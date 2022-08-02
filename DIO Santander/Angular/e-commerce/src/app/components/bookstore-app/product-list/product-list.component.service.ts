import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./product-item/model/book";

@Injectable()

export class BookService
{
  private url = "";
  
  httpOptions = 
  {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http : HttpClient)
  {

  }

  getBook()
  {
    return this.http.get(this.url);
  }
}
