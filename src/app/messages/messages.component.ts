import { Component, OnInit } from '@angular/core';
//import service hero
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
//component để show messages
export class MessagesComponent implements OnInit {
//inject service vào component
//tại sao kiểu trả về của property là public?
//=> vì ta phải bind messageService với template html
  constructor(public messageService:MessageService) { 
    //khi ta tạo instance này giá trị property heroes đã được set trước đó bởi hàm getHeroes()
    // trong HeroService hay nói chính xác hơn khi chạy ngOnInit() heroComponent
  }

  ngOnInit() {
  }

}
