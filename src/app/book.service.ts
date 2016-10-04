import { Injectable } from '@angular/core';
import {Book} from "./model/book";

const BOOKS: Book[] = [
  { id: 11, title: 'Mr. Nice'},
  { id: 12, title: 'Narco' },
  { id: 13, title: 'Bombasto' },
  { id: 14, title: 'Celeritas' },
  { id: 15, title: 'Magneta' },
  { id: 16, title: 'RubberMan' },
  { id: 17, title: 'Dynama' },
  { id: 18, title: 'Dr IQ' },
  { id: 19, title: 'Magma' },
  { id: 20, title: 'Tornado' }
];

@Injectable()
export class BookService {

  constructor() { }

  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

  getById(id : number) : Promise<Book> {
    return this.getBooks().then(books => books.find(book => book.id === id));
  }

}
