import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./routing.module";
import { AppComponent } from "./app.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthInterceptorService } from "./auth/auth.interceptor";
import { AuthService } from "./auth/auth.service";
import { LoadingSpinnerComponent } from "./shared/layout/loading-spinner/loading-spinner.component";
import { LayoutModule } from "./shared/layout/layout.module";
import { MovieAppModule } from "./movie-app/movie-app.module";



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LayoutModule
  ],
  providers: [AuthService, AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
