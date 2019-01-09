import { Component, OnInit } from '@angular/core';
// import model
import { Hero } from '../hero';
// import service
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  heroes: Hero[];
  ngOnInit() {
    this.getHeroes();
  }
  // hàm để get data trả về từ service theo nguyên lý asynchronous
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
