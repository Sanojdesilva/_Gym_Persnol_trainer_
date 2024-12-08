import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  trainerName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadTrainerInfo();
  }

  // to load trainer infrmation
  loadTrainerInfo() {
    const storedTrainerName = localStorage.getItem('trainerName');
    if (storedTrainerName) {
      this.trainerName = storedTrainerName;
    } else {
      this.router.navigate(['/login']);
    }
  }

  // Logout Methd
  logout() {

    localStorage.removeItem('trainerId');
    localStorage.removeItem('trainerName');
    this.router.navigate(['/login']);
  }
}
