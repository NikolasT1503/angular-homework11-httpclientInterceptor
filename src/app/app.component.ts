import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-homework11-httpclientInterceptor';
  navbarOpen = false;

  constructor(public myHttp: MyHttpServiceService){

  }

  ngOnInit(){
    /* this.myHttp.loadUsers(); */
  }

  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }
}
