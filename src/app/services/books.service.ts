import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../book-list/book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  getBook(id: number): Observable<Book>{
    return this.http.get<Book>(`/api/books/${id}`)
  }

  save(book: Partial<Book>): Observable<Book>{
    if(!book.id){
       return this.http.post<Book>(`/api/books`, book)
    }
    return this.http.put<Book>(`/api/books/${book.id}`, book)
  }

}
