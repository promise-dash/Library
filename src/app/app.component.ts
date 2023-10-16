import { Component } from '@angular/core';
import { BookDataService } from './services/book-data.service';
import { CartItem } from './models/cart-item';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';

  books: Book[]=[];
  cart: CartItem[]=[];
  totalPrice: number = 0;
  searchedBooks: Book[];

  constructor(private bookService: BookDataService){
      this.fetchBooksData(bookService);
  }

  fetchBooksData(bookService: BookDataService){
    this.bookService.getBooksData().subscribe((data: any) => {
      this.books = data.books;
      this.searchedBooks = data.books;
      // console.log(this.books);
    });
  }

  addBook(book: Book){
    const idx = this.cart.findIndex(item => item.data === book);

    if(idx === -1){
      this.cart.push({data: book, freq: 1});
    }else{
      this.cart[idx].freq++;
    }
    this.totalPrice += book.price.value;
  }

  removeFromCart(book: CartItem){
    const idx = this.cart.findIndex(item => item.data === book.data);
    this.cart.splice(idx, 1);
    this.totalPrice -= book.data.price.value * book.freq;
  }

  descFreq(book:  CartItem){
    const idx = this.cart.findIndex(item => item.data === book.data);
    if(this.cart[idx].freq > 1){
      this.cart[idx].freq --;
      this.totalPrice -= book.data.price.value;
    }
    else{
      this.removeFromCart(book);
    }
  }

  getSearchedBook(inputTerm: string){
    
    const term = inputTerm.toLowerCase();
    this.searchedBooks = this.books.filter((book) => {
      return book.title.toLowerCase().startsWith(term);
    });
    console.log(this.searchedBooks);
  }

  
}
