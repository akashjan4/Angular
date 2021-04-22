import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'watch-list', pathMatch: 'full' },
    { path: 'watch-list', component: WatchListComponent, canActivate: [AuthGuardService] },
    { path: 'search', component: SearchComponent, canActivate: [AuthGuardService] },
    { path: 'trending', component: TrendingComponent, canActivate: [AuthGuardService] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieAppRoutingModule { }