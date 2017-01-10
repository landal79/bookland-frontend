import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router}   from '@angular/router';
import {Location}                 from '@angular/common';
import {BookService} from "../book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {


  book: Book;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.bookService.getById(id)
          .then(book => this.book = book);
      } else {
        this.book = new Book();
      }
    });
  }

  handleContent(event: CustomEvent) {
    console.info('handleContent: ' +  JSON.stringify(event));
    this.book.description = event.toString();
  }

  clear(): void {
    this.router.navigate(['list']);
  }

  save(): void {
    if (this.book.id == null) {
      this.bookService.saveOrUpdate(this.book);
    }
    this.router.navigate(['list']);
  }

}
