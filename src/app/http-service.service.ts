import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {
  
  users;

  constructor(private httpclient: HttpClient) { }

  getUsers(){
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts')
  }

  loadUsers(){
    this.users=this.getUsers();
  }
}
