import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {BookService} from "./services/book.service";
import {ComponentsModule} from "./components/components.module";
import {BookComponentsModule} from "./book-module/book-components.module";
import {BookDetailComponent} from "./book-module/book-detail/book-detail.component";
import {BookEditComponent} from "./book-module/book-edit/book-edit.component";
import {BookListComponent} from "./book-module/book-list/book-list.component";
import {_404Component} from "./components/404-component/404";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: BookListComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'new',
    component: BookEditComponent
  },
  {path: '**', component: _404Component}

];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ComponentsModule,
    BookComponentsModule,
    MaterialModule.forRoot()
  ],

  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
