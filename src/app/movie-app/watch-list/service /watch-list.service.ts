import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, merge, Observable } from 'rxjs';
import { WatchList } from '../watch-list';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor(private httpClient: HttpClient) { }
  private watchList = [
  'The mask', 
  'Breaking bad', 
  'Better call saul', 
  'Mad max fury',
  '3 idiots',
  'Star Wars: Episode IV - A New Hope',
  'Back to the future', 
  'John wick',
  'zack snyder\'s justice league'
  ];

  public getWatchList(): Observable<WatchList[]>{
    const listSubscription:Array<Observable<WatchList>> = [];
    this.watchList.forEach(d => {
      listSubscription.push(this.httpClient.get<WatchList>(`http://www.omdbapi.com/?apikey=ac45d1d4&t="${d}"`));
    })
    return forkJoin(listSubscription);
  }

}
