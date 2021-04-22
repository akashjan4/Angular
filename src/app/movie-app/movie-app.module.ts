import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppRoutingModule } from './routing.module';
import { CardV2Module } from '../shared/card-v2';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../shared/layout/layout.module';
import { MinutesToHoursPipe } from '../shared/pipes/minToHours.pipe';
import { TooltipDirective } from '../shared/tooltip/tooltip.directive';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { WatchListService } from './watch-list/service /watch-list.service';



@NgModule({
  declarations: [
    SearchComponent,
    TrendingComponent,
    WatchListComponent,
    TooltipDirective,
    MinutesToHoursPipe
  ],
  imports: [
    CommonModule,
    MovieAppRoutingModule,
    CardV2Module,
    HttpClientModule,
    LayoutModule
  ],
  exports: [],
  providers: [WatchListService]
})
export class MovieAppModule { }
