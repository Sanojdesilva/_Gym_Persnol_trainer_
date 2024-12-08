import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchClientPageRoutingModule } from './search-client-routing.module';

import { SearchClientPage } from './search-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchClientPageRoutingModule
  ],
  declarations: [SearchClientPage]
})
export class SearchClientPageModule {}
