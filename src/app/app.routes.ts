import { Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { RepoComponent } from './components/repo/repo.component';

export const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/repos/:owner/:name', component: RepoComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];