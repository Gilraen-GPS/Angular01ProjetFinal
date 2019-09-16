import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { AgentComponent } from './components/agent/agent.component';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { DeleteClientComponent } from './components/client/delete-client/delete-client.component';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';
import { GetByIdClientComponent } from './components/client/get-by-id-client/get-by-id-client.component';
import { GetAllClientComponent } from './components/client/get-all-client/get-all-client.component';
import { GetAllProprietaireComponent } from './components/proprietaire/get-all-proprietaire/get-all-proprietaire.component';
import { GetByIdProprietaireComponent } from './components/proprietaire/get-by-id-proprietaire/get-by-id-proprietaire.component';
import { AddProprietaireComponent } from './components/proprietaire/add-proprietaire/add-proprietaire.component';
import { DeleteProprietaireComponent } from './components/proprietaire/delete-proprietaire/delete-proprietaire.component';
import { UpdateProprietaireComponent } from './components/proprietaire/update-proprietaire/update-proprietaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    AgentComponent,
    AddClientComponent,
    DeleteClientComponent,
    UpdateClientComponent,
    GetByIdClientComponent,
    GetAllClientComponent,
    GetAllProprietaireComponent,
    GetByIdProprietaireComponent,
    AddProprietaireComponent,
    DeleteProprietaireComponent,
    UpdateProprietaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
