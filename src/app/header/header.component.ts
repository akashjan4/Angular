import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHeader } from './IHeader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

  @Input() navItems: IHeader[] = [];
  @Output() click = new EventEmitter<IHeader>()

  getNavLink = (navItem: IHeader) => navItem.link ? navItem.link : [];

  getNavActiveClass = (navItem: IHeader) => navItem.link ? 'active' : '';

  navClicked(event: Event, navItem: IHeader) {
    event.preventDefault();
    this.click.emit(navItem);
  }
}
