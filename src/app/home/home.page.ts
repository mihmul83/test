import { Component, AfterViewInit, ViewChild  } from '@angular/core';
import { BoardComponent } from '../board/board/board.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  

  @ViewChild(BoardComponent)
  private boardComponent: BoardComponent;

  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  restart() { 
    this.boardComponent.newGame(); 
  }
}
