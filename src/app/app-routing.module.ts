import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';
import { ClientsPageModule } from './clients/clients.module';
import { AddClientPageModule } from './add-client/add-client.module';
import { EditClientPageModule } from './edit-client/edit-client.module';
import { SearchClientPageModule } from './search-client/search-client.module';

const routes: Routes = [
  { path: '', redirectTo: 'add-client', pathMatch: 'full' }, // Default ruote
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsPageModule) },
  { path: 'add-client', loadChildren: () => import('./add-client/add-client.module').then(m => m.AddClientPageModule) },
  { path: 'edit-client/:id', loadChildren: () => import('./edit-client/edit-client.module').then(m => m.EditClientPageModule) },
  { path: 'search-client', loadChildren: () => import('./search-client/search-client.module').then(m => m.SearchClientPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
