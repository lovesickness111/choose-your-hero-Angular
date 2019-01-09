import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import service 
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // tạo 1 property hứng mảng dữ liệu lấy được từ mock-heroes thông qua service
  heroes: Hero[];//Hero[] là kết quả trả về từ hàm getHeroes của service
  // để gọi được đến HeroService trước hết ta phải inject đối tượng Service vào component thông qua constructor
  constructor(private heroService: HeroService) {
    // khi component được khởi tạo DI system sẽ tạo heroService là 1 thể hiện của HeroService
  }
  // tại sao không gọi hàm getHeroes trong constructor của component?
  // =>không nên vì hàm khởi tạo chỉ nên gán giá trị cho tham số
  // ta sẽ sd lifeCycle 
  ngOnInit() {
    // alert("component heroes was initated");
    this.getHeroes();
  }
  // hàm để get data trả về từ service theo nguyên lý asynchronous
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
