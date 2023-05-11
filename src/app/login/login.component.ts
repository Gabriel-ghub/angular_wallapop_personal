import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  password: string;
  user = {};
  errorMessage: string = '';

  constructor(private authService: AuthService, private router:Router) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    if (this.email == '' || this.password == '') {
      this.errorMessage = 'Debe completar todos los campos';
      return;
    }
    this.user = { email: this.email, password: this.password };
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      (error) => console.log(error)
    );
  }
}
