import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//service để thực hiện lấy dữ liệu trả về dưới dạng thông báo để hiện thị vào messagesComponent
export class MessageService {

  //property messages kiểu khởi tạo là mảng string rỗng
  messages: string[] = [];
  add(message: string) {
    //mỗi lần gọi hàm add thì 1 message sẽ được thêm vào mảng
    this.messages.push(message);
  }
  //hàm clear thông báo
  clear() {
    this.messages = [];
  }
}
//việc cần làm giờ là inject vào component thôi