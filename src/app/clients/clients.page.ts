/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clients: any[] = [];
  trainerId: number = 1; 

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients(this.trainerId).subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching clients', error);
      }
    );
  }

  deleteClient(clientId: number) {
    this.clientService.deleteClient(clientId).subscribe(
      () => {
        this.clients = this.clients.filter(client => client.id !== clientId);
      },
      (error) => {
        console.error('Error deleting client', error);
      }
    );
  }
}

