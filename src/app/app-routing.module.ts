import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TrendingComponent } from './trending/trending.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  {
    path: '', pathMatch: "full", redirectTo:'/watch-list'
  },
  {
    path: 'watch-list', component: WatchListComponent,
  },
  {
    path: 'trending', component: TrendingComponent,
  },
  {
    path: 'about', component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
