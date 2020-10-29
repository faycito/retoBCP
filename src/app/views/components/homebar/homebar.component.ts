import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bcp-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.scss']
})
export class HomebarComponent implements OnInit {

  @Output() searching = new EventEmitter();
  @Output() clearSearch = new EventEmitter();

  search: boolean = false;
  searchInput: any;

  constructor() { }

  ngOnInit(): void {
  }

  switchSearch(): void {
    this.search = !this.search;
    if(this.search === false){
      this.searchInput = ''
      this.clearSearch.emit();
    }
  }

  onSearch() : void {
    console.log("pressed")
    if(this.searchInput && this.searchInput.length > 0){
      this.searching.emit(this.searchInput)
    }
  }


}
