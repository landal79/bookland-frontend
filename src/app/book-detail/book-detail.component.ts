import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {BookService} from "../book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book : Book;

  constructor(private bookService : BookService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.bookService.getById(id)
        .then(book => this.book = book);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
