import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookService } from "./book.service";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
