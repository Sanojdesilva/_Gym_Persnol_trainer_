// src/app/services/client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'https://nehemia.it.scu.edu.au/personaltrainer'; // API Base URL

  constructor(private http: HttpClient) {}

  // 1. Login
  loginTrainer(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/personaltrainer/login`, loginData);
  }

  // 2. Get All Clients
  getClients(trainerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/client/${trainerId}`);
  }

  // 3. Add a New Client
  addClient(clientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/client`, clientData);
  }

  // 4.update Exiting Client
  editClient(clientId: number, clientData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/client/${clientId}`, clientData);
  }

  // 5. Delete Client
  deleteClient(clientId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/client/${clientId}`);
  }

  // 6. Search Clients
  searchClients(trainerId: number, query: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/client/search`, {
      params: { trainerId: trainerId.toString(), query },
    });
  }

  // 7. Get Client by ID
  getClientById(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/client/${clientId}`);
  }
}
