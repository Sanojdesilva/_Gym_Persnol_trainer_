
import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private clientService: ClientService, private router: Router) {}


  login() {
    this.clientService.loginTrainer(this.email, this.password).subscribe(
      (response) => {
        if (response.message === 'Login successful') {
          localStorage.setItem('trainerId', response.user.personaltrainer_id);
          localStorage.setItem('trainerName', response.user.name);
          this.router.navigate(['/clients']);
        } else {
          this.errorMessage = 'Login failed: ' + response.message;
        }
      },
      (error) => {
        console.error('Error during login', error);
        this.errorMessage = 'An error occurred during login. Please try again.';
      }
    );
  }
}
