import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'ng-cook-book📔';
  navigationItems = [];

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.authService.user.subscribe(d => {
      this.initializeNavigation(d)
    })
    this.initializeNavigation(sessionStorage.getItem('token'))
  }

  onNavItemClicked(event) {
    if (event.text.toLowerCase() === 'logout') {
      this.navigationItems = [];
      sessionStorage.removeItem('token')
      this.router.navigate(['/login'])
    }
  }
  private initializeNavigation(token) {
    if (!token) return;
    this.navigationItems = [
      { id: '1', text: 'Watch List', link: 'movie-app' },
      { id: '2', text: 'Trending', link: 'movie-app/trending' },
      { id: '3', text: 'Search', link: 'movie-app/search' },
      { id: '4', text: 'About', link: 'about' },
      { id: '5', text: 'Logout', link: 'login' }
    ];
  }
}
