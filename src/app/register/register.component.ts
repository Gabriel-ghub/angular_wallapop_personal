import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string;
  email: string;
  password: string;
  user = {};

  constructor(private authService: AuthService, private router: Router) {
    this.name = '';
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    this.user = {
      email: this.email,
      password: this.password,
      name: this.name,
    };
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log(response);
        this.user = {
          email : this.email,
          password: this.password,
        }
        this.authService.login(this.user).subscribe(
          (response) => {
            console.log(response);
            this.router.navigate(['/home']);
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }
}
