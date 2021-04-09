import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponseData } from './auth.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  isLoginMode = true;
  showSpinner = false;
  authObs: Observable<AuthResponseData>
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    //eve.holt@reqres.in
    //cityslicka
    this.showSpinner = true;
    this.authService.singUp(form.value).subscribe(token => {
      this.showSpinner = false;
      this.isLoginMode = false;
      this.authService.user.next(token)
      this.router.navigate(['/watch-list'])
      sessionStorage.setItem('token', JSON.stringify(token))
    }, (e) => {
      console.error(e);
      this.showSpinner = false;
    });
    form.reset();

  }

  ngOnInit(): void {
  }

}
