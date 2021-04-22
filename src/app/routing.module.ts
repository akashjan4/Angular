import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {
    path: '', pathMatch: "full", redirectTo: '/login'
  },
  {
    path: 'about', component: AboutComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: AuthComponent
  },
  {
    path: 'movie-app',
    loadChildren: () => import('./movie-app/movie-app.module').then(m => m.MovieAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
