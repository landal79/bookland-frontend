import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book'
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.bookService.getBooks().then(books => this.books = books);
  }

  newBook() {
    this.router.navigate(['/new']);
  }

}


