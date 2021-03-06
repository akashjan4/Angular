import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-cook-book📔';
  navigationItems = [
    { id: '1', text: 'Watch List', link: 'watch-list' },
    { id: '2', text: 'Trending', link: 'trending' },
    { id: '3', text: 'Search', link: '' },
    { id: '4', text: 'About', link: 'about' }
  ];

  onNavItemClicked(event) {
    console.log(event)
  }
}
