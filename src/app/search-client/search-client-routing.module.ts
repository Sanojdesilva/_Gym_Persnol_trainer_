import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchClientPage } from './search-client.page';

const routes: Routes = [
  {
    path: '',
    component: SearchClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchClientPageRoutingModule {}
