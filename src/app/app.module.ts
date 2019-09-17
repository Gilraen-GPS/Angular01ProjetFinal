import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

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
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { DeleteAgentComponent } from './components/agent/delete-agent/delete-agent.component';
import { GetAllAgentComponent } from './components/agent/get-all-agent/get-all-agent.component';
import { GetByIdAgentComponent } from './components/agent/get-by-id-agent/get-by-id-agent.component';
import { UpdateAgentComponent } from './components/agent/update-agent/update-agent.component';
import { UpdateAAcheterComponent } from './components/aAcheter/update-aacheter/update-aacheter.component';
import { DeleteAAcheterComponent } from './components/aAcheter/delete-aacheter/delete-aacheter.component';
import { AddAAcheterComponent } from './components/aAcheter/add-aacheter/add-aacheter.component';
import { GetAllAAcheterComponent } from './components/aAcheter/get-all-aacheter/get-all-aacheter.component';
import { GetByIdAAcheterComponent } from './components/aAcheter/get-by-id-aacheter/get-by-id-aacheter.component';
import { GetByIdALouerComponent } from './components/aLouer/get-by-id-alouer/get-by-id-alouer.component';
import { GetAllALouerComponent } from './components/aLouer/get-all-alouer/get-all-alouer.component';
import { AddALouerComponent } from './components/aLouer/add-alouer/add-alouer.component';
import { DeleteALouerComponent } from './components/aLouer/delete-alouer/delete-alouer.component';
import { UpdateALouerComponent } from './components/aLouer/update-alouer/update-alouer.component';
import { UpdateCategorieComponent } from './components/categorie/update-categorie/update-categorie.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { DeleteCategorieComponent } from './components/categorie/delete-categorie/delete-categorie.component';
import { GetAllCategorieComponent } from './components/categorie/get-all-categorie/get-all-categorie.component';
import { GetByIdCategorieComponent } from './components/categorie/get-by-id-categorie/get-by-id-categorie.component';
import { GetByIdVisiteComponent } from './components/visite/get-by-id-visite/get-by-id-visite.component';
import { GetAllVisiteComponent } from './components/visite/get-all-visite/get-all-visite.component';
import { AddVisiteComponent } from './components/visite/add-visite/add-visite.component';
import { UpdateVisiteComponent } from './components/visite/update-visite/update-visite.component';
import { DeleteVisiteComponent } from './components/visite/delete-visite/delete-visite.component';
import { DeleteContratComponent } from './components/contrat/delete-contrat/delete-contrat.component';
import { AddContratComponent } from './components/contrat/add-contrat/add-contrat.component';
import { UpdateContratComponent } from './components/contrat/update-contrat/update-contrat.component';
import { GetByIdContratComponent } from './components/contrat/get-by-id-contrat/get-by-id-contrat.component';
import { GetAllContratComponent } from './components/contrat/get-all-contrat/get-all-contrat.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';




import { routing } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './security/_helpers';
import { HomeComponent } from './security/home';
import { LoginComponent } from './security/login';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    HeaderComponent,
    AddClientComponent,
    DeleteClientComponent,
    UpdateClientComponent,
    GetByIdClientComponent,
    GetAllClientComponent,
    GetAllProprietaireComponent,
    GetByIdProprietaireComponent,
    AddProprietaireComponent,
    DeleteProprietaireComponent,
    UpdateProprietaireComponent,
    AddAgentComponent,
    DeleteAgentComponent,
    GetAllAgentComponent,
    GetByIdAgentComponent,
    UpdateAgentComponent,
    UpdateAAcheterComponent,
    DeleteAAcheterComponent,
    AddAAcheterComponent,
    GetAllAAcheterComponent,
    GetByIdAAcheterComponent,
    GetByIdALouerComponent,
    GetAllALouerComponent,
    AddALouerComponent,
    DeleteALouerComponent,
    UpdateALouerComponent,
    UpdateCategorieComponent,
    AddCategorieComponent,
    DeleteCategorieComponent,
    GetAllCategorieComponent,
    GetByIdCategorieComponent,
    GetByIdVisiteComponent,
    GetAllVisiteComponent,
    AddVisiteComponent,
    UpdateVisiteComponent,
    DeleteVisiteComponent,
    DeleteContratComponent,
    AddContratComponent,
    UpdateContratComponent,
    GetByIdContratComponent,
    GetAllContratComponent,
    FooterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
