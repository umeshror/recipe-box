import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navSelectedEmitter = new EventEmitter<string>();

  navSelected(selected: string) {
    this.navSelectedEmitter.emit(selected);
  }
}
