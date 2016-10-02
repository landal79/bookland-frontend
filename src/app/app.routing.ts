import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

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


];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [BookListComponent, BookDetailComponent];
