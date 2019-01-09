import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// xử lý dữ liệu bất đồng bộ vì httpClient.get trả về 1 observable
import { observable, of, Observable } from 'rxjs';
// inject 1 service khác vào service này để hiện thông báo
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
// class có thể lấy dữ liệu từ bất kỳ đâu web service, local storage, trong trường hợp này là data mockup
export class HeroService {
  // bắt đầu inject messageService với mục đích khi khởi tạo HeroService thì 1 instance của
  // messageService được tạo-> instance đó được cho property 
  constructor(private messageService: MessageService) { }
  // tạo 1 method để lấy dữ liệu từ HEROES
  getHeroes(): Observable<Hero[]> {
    // gửi kèm thông báo là lấy được hero
    this.messageService.add(`HeroService: fetched heroes`);
    // kiểu trả về là 1 observable 
    return of(HEROES);
  }
  // hàm lấy hero theo id
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: lấy được thông tin hero có id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
// điều cần làm bây giờ là cung cấp (inject) service này vào thằng component trong trường hợp này dữ liệu
// sẽ cần phải đổ vào list heroes trong component heroesComponent + display thông báo ra messagesComponent 