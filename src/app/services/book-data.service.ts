import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) {}

   baseUrl = 'https://private-anon-fe47945980-bookstore.apiary-mock.com/books';

    getBooksData(){
      const response = this.http.get(this.baseUrl);
      return response;
    }
} 
