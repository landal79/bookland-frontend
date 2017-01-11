import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {ComponentsModule} from "../components/components.module";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    MaterialModule,
  ],
  declarations: [BookListComponent, BookEditComponent, BookDetailComponent],
  exports: [BookListComponent, BookEditComponent,BookDetailComponent]
})
export class BookComponentsModule { }
