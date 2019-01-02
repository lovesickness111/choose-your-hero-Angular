import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import component heroes phan import nay tu thuc hien khi chay terminal: ng g c heroes
import { HeroesComponent } from './heroes/heroes.component';
//import formModule de sung dung two way binding trong html
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component'
//ngModule giup config injector và compiler và giúp tạo liên kết các thành phần trong project
//@ biểu thị 1 decorator
@NgModule({
  //mô tả các component để component khác cũng có thể tái sử dung
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  //khai báo các module cần import cũng có thể cung cấp service cho ứ dụng
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
