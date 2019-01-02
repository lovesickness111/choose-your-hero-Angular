import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  //create an input parameter has type of Hero class
  // định danh hero là 1 input để nhận gái trị từ component heroComponent
  @Input()hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
