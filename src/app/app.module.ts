import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { appRoutes } from './app.routes'; 

import { SearchService} from './core/search.service';
import { ConstantsService } from './core/constants.service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RepoComponent } from './components/repo/repo.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    RepoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ConstantsService,
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
