import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from '../../core/search.service';

@Component({
  templateUrl: './repo.html',
  styles: [`
    .repo__name { margin: 0; }
    .repo-readme-body { margin-top: 20px; margin-left: 0;}
  `],
})
export class RepoComponent {
  owner: string = '';
  repoName: string = '';
  readme: string = '';
  errorText: string = `
    <div>Can't get readme for this repo</div>
  `;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.owner = this.route.snapshot.params['owner']
    this.repoName = this.route.snapshot.params['name'];
    this.searchService.lastSearch.login = this.owner;
    this.searchService.getRepoReadMe(this.owner, this.repoName)
      .subscribe((readme) => {
        this.readme = readme;
      }, () => {
        this.readme = this.errorText;
      });
  }

  backToUser() {
    this.router.navigate(['user']);
  }
}