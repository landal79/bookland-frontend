import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {BookService} from "../book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

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

}
