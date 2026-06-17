import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { BookList } from './book-list/book-list';
import { EditBook } from './edit-book/edit-book';
import { EditBookReactive } from './edit-book-reactive/edit-book-reactive';
import { BookReview } from './book-review/book-review';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'catalog',
        component: Catalog
    },
    {
        path: "books",
        component: BookList
    },
    {
        path: "review",
        component: BookReview
    },
    {
        path: "books/edit",
        component: EditBook
    },
    {
        path: "books/edit/reactive",
        component: EditBookReactive
    },
    {
        path: "books/edit/:id",
        component: EditBook
    },
    {
        path: "books/edit/reactive/:id",
        component: EditBookReactive
    }
];
