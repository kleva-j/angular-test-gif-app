import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { GiphyService } from 'src/app/services/giphy.service';
import { Giphy } from '../models/giphy.model';
import * as GiphyActions from '../store/giphy.actions';

interface AppState {
    giphy: Giphy;
}

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
    public input = '';
    name = 'Search Field';
    queryParam = {
        q: '',
        limit: 20,
        offset: 0,
        rating: 'PG',
        lang: 'en',
    };

    constructor(private giphy: GiphyService, private store: Store<AppState>) { }

    getGif() {
        this.giphy.getGiphy({ ...this.queryParam, q: this.input })
            .pipe(debounceTime(500))
            .subscribe(
                (result) => {
                    this.store.dispatch(new GiphyActions.UpdateResult({ search: this.input, result }));
                }
            );
    }

    handleSearch(event) {
        event.preventDefault();
        this.store.dispatch(new GiphyActions.UpdateSearch(this.input));
        this.getGif();
    }
}
