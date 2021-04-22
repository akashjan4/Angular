import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IHeader } from './IHeader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor() { }

  @Input() navItems: IHeader[] = [];
  @Output() click = new EventEmitter<IHeader>()

  ngOnInit() {

  }
  getNavLink = (navItem: IHeader) => navItem.link ? navItem.link : [];

  getNavActiveClass = (navItem: IHeader) => navItem.link ? 'active' : '';

  navClicked(event: Event, navItem: IHeader) {
    event.preventDefault();
    event.stopPropagation();
    this.click.emit(navItem);
  }

  trackByFn(navItem) {
    return navItem.id
  }
}
