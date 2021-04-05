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
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './shared/card/card.component';
import { CardV2Module } from './shared/card-v2';
import { ButtonModule } from './shared/button';
import { TooltipDirective } from './shared/tooltip.directive';

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
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardV2Module,
    ButtonModule
  ],
  providers: [WatchListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
