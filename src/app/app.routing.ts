import {Routes, RouterModule} from '@angular/router';

import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookEditComponent} from "./book-edit/book-edit.component";
import {_404Component} from "./404-component/404";

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

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [BookListComponent, BookDetailComponent, BookEditComponent];
