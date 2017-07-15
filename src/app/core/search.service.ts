import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ConstantsService } from './constants.service';

@Injectable()
export class SearchService {
  repos = [];

  lastSearch = {
    login: '',
    repos: [],
  };

  constructor(
    private constantsService: ConstantsService,
    private http: Http,
  ) {}

  searchUser(login: string): Observable<any> {
    this.lastSearch.login = login;
    const url = this.constantsService.githubURLS.user(login);

    return this.http.get(url)
      .map((response: Response) => {
        const user = response.json();

        this.searchRepos(user.repos_url)
          .then((repos) => {
            user.repos = repos;
            this.lastSearch.repos = repos;
          })
          .catch((reject) => {
            console.log('reject get repos', reject);
          });

        return user;
      })
      .catch((reject) => {
        return Observable.throw(reject);
      });
  }

  searchRepos(url): Promise<any> {
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      })
      .toPromise();
  }

  getRepoReadMe(owner, name): Observable<any> {
    const url = this.constantsService.githubURLS.getRepoReadme(owner, name);
    const headers = new Headers({'Accept': 'application/vnd.github.html'});
    const options = new RequestOptions({ headers });

    return this.http.get(url, options)
      .map((response: any) => {
        return response._body;
      })
      .catch(this.errorsHandler);
  }

  errorsHandler(reject: Response) {
    return Observable.throw(reject.statusText);
  }
}