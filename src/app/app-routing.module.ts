import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { TrendingComponent } from './trending/trending.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  {
    path: '', pathMatch: "full", redirectTo: '/login'
  },
  {
    path: 'watch-list', component: WatchListComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'trending', component: TrendingComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'about', component: AboutComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
