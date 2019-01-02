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
  toggleText() {
    this.isHide = !this.isHide;
  }
}
