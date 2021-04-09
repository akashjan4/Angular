import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { WatchListService } from './watch-list/service /watch-list.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardComponent } from './shared/card/card.component';
import { CardV2Module } from './shared/card-v2';
import { ButtonModule } from './shared/button';
import { TooltipDirective } from './shared/tooltip.directive';
import { MinutesToHoursPipe } from './shared/pipes/minToHours.pipe';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth.interceptor';
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    WatchListComponent,
    TrendingComponent,
    SearchComponent,
    AboutComponent,
    CardComponent,
    TooltipDirective,
    MinutesToHoursPipe,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardV2Module,
    ButtonModule,
    FormsModule
  ],
  providers: [WatchListService, AuthService, AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
