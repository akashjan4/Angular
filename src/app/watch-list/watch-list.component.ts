import { Component, OnDestroy, OnInit } from '@angular/core';
import { WatchListService } from './service /watch-list.service';
import { Subscriber } from 'rxjs';
import { WatchList } from './watch-list';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
})

export class WatchListComponent implements OnInit, OnDestroy {

  constructor(private watchListService: WatchListService) { }
  
  subscriptions = new Subscriber()
  movieList:WatchList[] = []

  ngOnInit(): void {
    this.watchListService.getWatchList().subscribe(response => {
      this.movieList = response
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
