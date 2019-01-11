import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  content = 'this is a string interpolation';

  isHide = true;
  cone = true;
  ctwo = true;

  style = 'normal';
  size = `24px`;
  toggleText() {
    this.isHide = !this.isHide;
  }

  toggleStyle() {
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
    this.style = 'italic';
  }
}
