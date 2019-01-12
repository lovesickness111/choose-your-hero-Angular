import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  @Input() name: string;
  /**
   * để có thể xuất giá trị ra component con cần dùng output và event emitter
   * hàm onVote sau khi được Emit sẽ là event Listener trong component cha
   */
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onVote = new EventEmitter<boolean>();
  public voted = false;
  /**
   * hàm sự kiện vote là event handler trong component con
   */
  vote(agree: boolean) {
    this.voted = true;
    this.onVote.emit(agree);
  }
  /**
   * sử dụng viewChild để sử dụng các prop và phương thức của component con trong Component cha
   * ví dụ trong component cha muốn gọi hàm set name
   */
  setNameTutorial(name: string) {
    this.name = name;
  }
  constructor() { }
  ngOnInit() {
  }
}

