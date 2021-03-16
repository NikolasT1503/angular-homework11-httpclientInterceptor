import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHttpServiceService } from './http-service.service';
import { TableComponentComponent } from './table-component/table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [MyHttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
