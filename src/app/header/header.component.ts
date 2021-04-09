import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IHeader } from './IHeader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription()
  isAuthenticated: Boolean = false;
  constructor(private authService: AuthService, private router: Router) {

  }

  @Input() navItems: IHeader[] = [];
  @Output() click = new EventEmitter<IHeader>()

  ngOnInit() {
    this.subscriptions.add(this.authService.user.subscribe(token => {
      this.isAuthenticated = !!token
    }))
  }
  getNavLink = (navItem: IHeader) => navItem.link ? navItem.link : [];

  getNavActiveClass = (navItem: IHeader) => navItem.link ? 'active' : '';

  navClicked(event: Event, navItem: IHeader) {
    event.preventDefault();
    this.click.emit(navItem);
    if (navItem.text.toLowerCase() === 'logout') {
      this.isAuthenticated = false;
      sessionStorage.removeItem('token')
      this.router.navigate(['/login'])
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
