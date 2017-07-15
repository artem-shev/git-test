import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class UserComponent {
  title: string = 'user list'; 
  user: {} = {};

  getUser(user) {
    this.user = user;
  }
}