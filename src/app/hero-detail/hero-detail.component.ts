import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
// import để extract được route
import { ActivatedRoute } from '@angular/router';
// location là 1 service của angular để tương tác với trình duyệt dùng để back lại trang
import { Location } from '@angular/common';
// import service để lấy dữ liệu tương ứng
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // create an input parameter has type of Hero class
  // định danh hero là 1 input để nhận gái trị từ component heroComponent
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    // lấy id từ url
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  // hàm để quay lại trang trước
  goBack(): void {
    this.location.back();
  }
}
