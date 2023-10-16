import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Output() addBook: EventEmitter<Book> = new EventEmitter();
  
  
  handleClick(book: Book){
    this.addBook.emit(book);
  }
}
