import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.page.html',
  styleUrls: ['./search-client.page.scss'],
})
export class SearchClientPage implements OnInit {
  clients: any[] = [];
  trainerId: number = 1;

  errorMessage: string = '';

  constructor(private clientService: ClientService, private router: Router) {
    const storedTrainerId = localStorage.getItem('trainerId');
    this.trainerId = storedTrainerId ? parseInt(storedTrainerId, 10) : 1;
  }

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients() {
    this.clientService.getClients(this.trainerId).subscribe(
      (data: any[]) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching clients', error);
        this.errorMessage = 'An error occurred while fetching clients.';
      }
    );
  }

  deleteClient(clientId: number) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClient(clientId).subscribe(
        (response: any) => {
          if (response.message === 'Client deleted successfully') {
            this.clients = this.clients.filter((client) => client.client_id !== clientId);
          } else {
            console.error('Failed to delete client:', response.message);
            this.errorMessage = 'Failed to delete client: ' + response.message;
          }
        },
        (error) => {
          console.error('Error deleting client', error);
          this.errorMessage = 'An error occurred while deleting the client.';
        }
      );
    }
  }
}
