import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {
  clientId: number | null = null;
  client: any = {};

  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router // To navigeta
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.clientId = parseInt(id, 10);
        this.getClientDetails(this.clientId);
      } else {
        console.error('Client ID is missing');
        this.errorMessage = 'Client ID is missing in the URL.';
      }
    });
  }


  getClientDetails(clientId: number): void {
    this.clientService.getClientById(clientId).subscribe(
      (response: any) => {
        if (response) {
          this.client = response;
          this.client.dob = this.client.dob.split('T')[0];
          this.client.joined_date = this.client.joined_date.split('T')[0];
          this.client.ending_date = this.client.ending_date.split('T')[0];
        } else {
          this.errorMessage = 'Client not found.';
        }
      },
      (error: any) => {
        console.error('Error fetching client details', error);
        this.errorMessage = 'An error occurred while fetching client details.';
      }
    );
  }

  //to save updted client data
  saveClient(): void {
    if (this.clientId) {
      const updatedClient = {
        name: this.client.name,
        dob: this.client.dob,
        gender: this.client.gender,
        fitness_program: this.client.fitness_program,
        joined_date: this.client.joined_date,
        ending_date: this.client.ending_date,
        special_health_notes: this.client.special_health_notes,
      };

      this.clientService.editClient(this.clientId, updatedClient).subscribe(
        (response: any) => {
          if (response.message === 'Client updated successfully') {
            this.successMessage = 'Client updated successfully!';

            this.router.navigate(['/clients']);
          } else {
            this.errorMessage = 'Failed to update client: ' + response.message;
          }
        },
        (error: any) => {
          console.error('Error updating client', error);
          this.errorMessage = 'An error occurred while updating the client.';
        }
      );
    } else {
      this.errorMessage = 'Invalid client ID.';
      console.error('Invalid client ID');
    }
  }
}
