import { Component, OnInit, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Giphy } from '../models/giphy.model';
import { lazyLoad } from '../Utilities/helpers';

interface AppState {
  giphy: Giphy;
}

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit, DoCheck {
  giphy: Observable<Giphy>;
  target: any;
  searchResults: any;
  searchQueries: any;

  constructor(private store: Store<AppState>) {
    this.giphy = this.store.select('giphy');
  }

  ngOnInit() {
    this.giphy.subscribe((data) => {
      this.searchResults = data.searchResults;
      this.searchQueries = data.searchQueries;
    });
  }

  ngDoCheck() {
    this.target = document.querySelectorAll('img');
  }

  updateView($event, id) {
    $event.preventDefault();
    console.log(id);
  }

  onWindowScroll() {
    this.target.forEach(lazyLoad);
  }
}
