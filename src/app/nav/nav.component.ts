import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output() filterBook: EventEmitter<string> = new EventEmitter();

  searchForm = new FormGroup({
    searchInput: new FormControl('')
  });

  onChange(){
    // console.log(this.searchForm.value.searchInput);
    this.filterBook.emit(this.searchForm.value.searchInput!);
  }

}
