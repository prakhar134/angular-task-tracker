import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchText: string;
  urlParams: string;

  @Output() onSearchTask: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.urlParams = this.router.url.substring(
      this.router.url.lastIndexOf('/') + 1
    );
    this.searchText = decodeURIComponent(this.urlParams);

    this.onSubmit();
  }

  onSubmit() {
    console.log(this.searchText);
    this.onSearchTask.emit(encodeURIComponent(this.searchText.trim()));
  }
}
