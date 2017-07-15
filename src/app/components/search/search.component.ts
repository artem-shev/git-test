import { Component, Output, EventEmitter } from '@angular/core';

import { SearchService } from '../../core/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.html',
})
export class SearchComponent {
  @Output() getUser = new EventEmitter;

  usersQuery: string = '';

  constructor(
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    const lastSearch = this.searchService.lastSearch.login;
    if (lastSearch) {
      this.usersQuery = lastSearch;
      this.searchUser(lastSearch);
    }
  }

  searchUser(login: string) {
    this.searchService.searchUser(login)
      .subscribe((user) => {
        this.getUser.emit(user);
      }, (reject) => {
        this.getUser.emit({});
        const msg = reject.json().message;
        alert(`Can't get user with login "${login}": ${msg}`);
      });
  }
}
