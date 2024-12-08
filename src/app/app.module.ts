import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';
import { ClientsPageModule } from './clients/clients.module';
import { AddClientPageModule } from './add-client/add-client.module';
import { EditClientPageModule } from './edit-client/edit-client.module';
import { SearchClientPageModule } from './search-client/search-client.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    HomePageModule,
    LoginPageModule,
    ClientsPageModule,
    AddClientPageModule,
    EditClientPageModule,
    SearchClientPageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

