
import { Component } from '@angular/core';
import { ClientService } from '../services/client.service'; // Import client-servise
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage {
  name: string = '';
  dob: string = '';
  gender: string = '';
  fitnessProgram: string = '';
  email: string = '';
  password: string = '';
  joinedDate: string = '';
  endingDate: string = '';
  specialHealthNotes: string = '';

  trainerId: number = 1; // Default velue;

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private clientService: ClientService, private router: Router) {
    const storedTrainerId = localStorage.getItem('trainerId');
    this.trainerId = storedTrainerId ? parseInt(storedTrainerId, 10) : 1;
  }

  // Handle add a clients
  addClient() {
    const newClient = {
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      fitness_program: this.fitnessProgram,
      email: this.email,
      password: this.password,
      joined_date: this.joinedDate,
      ending_date: this.endingDate,
      special_health_notes: this.specialHealthNotes,
      personaltrainer_id: this.trainerId,
    };


    this.clientService.addClient(newClient).subscribe(
      (response) => {
        if (response.message === 'Client inserted successfully') {
          this.successMessage = 'Client added successfully!';

          this.router.navigate(['/clients']);
        } else {
          this.errorMessage = 'Failed to add client: ' + response.message;
        }
      },
      (error) => {
        console.error('Error adding client', error);
        this.errorMessage = 'An error occurred while adding the client.';
      }
    );
  }
}
