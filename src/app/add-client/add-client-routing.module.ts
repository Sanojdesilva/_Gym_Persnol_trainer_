import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddClientPage } from './add-client.page';

const routes: Routes = [
  {
    path: '',
    component: AddClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddClientPageRoutingModule {}
