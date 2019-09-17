import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddAAcheterComponent } from './components/aAcheter/add-aacheter/add-aacheter.component';
import { UpdateAAcheterComponent } from './components/aAcheter/update-aacheter/update-aacheter.component';
import { DeleteAAcheterComponent } from './components/aAcheter/delete-aacheter/delete-aacheter.component';
import { GetByIdAAcheterComponent } from './components/aAcheter/get-by-id-aacheter/get-by-id-aacheter.component';
import { GetAllAAcheterComponent } from './components/aAcheter/get-all-aacheter/get-all-aacheter.component';
import { AddALouerComponent } from './components/aLouer/add-alouer/add-alouer.component';
import { UpdateALouerComponent } from './components/aLouer/update-alouer/update-alouer.component';
import { DeleteALouerComponent } from './components/aLouer/delete-alouer/delete-alouer.component';
import { GetByIdALouerComponent } from './components/aLouer/get-by-id-alouer/get-by-id-alouer.component';
import { GetAllALouerComponent } from './components/aLouer/get-all-alouer/get-all-alouer.component';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { UpdateAgentComponent } from './components/agent/update-agent/update-agent.component';
import { DeleteAgentComponent } from './components/agent/delete-agent/delete-agent.component';
import { GetByIdAgentComponent } from './components/agent/get-by-id-agent/get-by-id-agent.component';
import { GetAllAgentComponent } from './components/agent/get-all-agent/get-all-agent.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './components/categorie/update-categorie/update-categorie.component';
import { DeleteCategorieComponent } from './components/categorie/delete-categorie/delete-categorie.component';
import { GetByIdCategorieComponent } from './components/categorie/get-by-id-categorie/get-by-id-categorie.component';
import { GetAllCategorieComponent } from './components/categorie/get-all-categorie/get-all-categorie.component';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';
import { DeleteClientComponent } from './components/client/delete-client/delete-client.component';
import { GetByIdClientComponent } from './components/client/get-by-id-client/get-by-id-client.component';
import { GetAllClientComponent } from './components/client/get-all-client/get-all-client.component';
import { AddContratComponent } from './components/contrat/add-contrat/add-contrat.component';
import { UpdateContratComponent } from './components/contrat/update-contrat/update-contrat.component';
import { DeleteContratComponent } from './components/contrat/delete-contrat/delete-contrat.component';
import { GetByIdContratComponent } from './components/contrat/get-by-id-contrat/get-by-id-contrat.component';
import { GetAllContratComponent } from './components/contrat/get-all-contrat/get-all-contrat.component';
import { AddProprietaireComponent } from './components/proprietaire/add-proprietaire/add-proprietaire.component';
import { UpdateProprietaireComponent } from './components/proprietaire/update-proprietaire/update-proprietaire.component';
import { DeleteProprietaireComponent } from './components/proprietaire/delete-proprietaire/delete-proprietaire.component';
import { GetByIdProprietaireComponent } from './components/proprietaire/get-by-id-proprietaire/get-by-id-proprietaire.component';
import { GetAllProprietaireComponent } from './components/proprietaire/get-all-proprietaire/get-all-proprietaire.component';
import { AddVisiteComponent } from './components/visite/add-visite/add-visite.component';
import { UpdateVisiteComponent } from './components/visite/update-visite/update-visite.component';
import { DeleteVisiteComponent } from './components/visite/delete-visite/delete-visite.component';
import { GetByIdVisiteComponent } from './components/visite/get-by-id-visite/get-by-id-visite.component';
import { GetAllVisiteComponent } from './components/visite/get-all-visite/get-all-visite.component';
import { LoginComponent } from './security/login';


const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"welcome", component:AccueilComponent},

  {path:"aAcheter/add", component:AddAAcheterComponent},
  {path:"aAcheter/update", component:UpdateAAcheterComponent},
  {path:"aAcheter/delete", component:DeleteAAcheterComponent},
  {path:"aAcheter/getById", component:GetByIdAAcheterComponent},
  {path:"aAcheter/getAll", component:GetAllAAcheterComponent},

  {path:"aLouer/add", component:AddALouerComponent},
  {path:"aLouer/update", component:UpdateALouerComponent},
  {path:"aLouer/delete", component:DeleteALouerComponent},
  {path:"aLouer/getById", component:GetByIdALouerComponent},
  {path:"aLouer/getAll", component:GetAllALouerComponent},

  {path:"agent/add", component:AddAgentComponent},
  {path:"agent/update", component:UpdateAgentComponent},
  {path:"agent/delete", component:DeleteAgentComponent},
  {path:"agent/getById", component:GetByIdAgentComponent},
  {path:"agent/getAll", component:GetAllAgentComponent},

  {path:"categorie/add", component:AddCategorieComponent},
  {path:"categorie/update", component:UpdateCategorieComponent},
  {path:"categorie/delete", component:DeleteCategorieComponent},
  {path:"categorie/getById", component:GetByIdCategorieComponent},
  {path:"categorie/getAll", component:GetAllCategorieComponent},

  {path:"client/add", component:AddClientComponent},
  {path:"client/update", component:UpdateClientComponent},
  {path:"client/delete", component:DeleteClientComponent},
  {path:"client/getById", component:GetByIdClientComponent},
  {path:"client/getAll", component:GetAllClientComponent},

  {path:"contrat/add", component:AddContratComponent},
  {path:"contrat/update", component:UpdateContratComponent},
  {path:"contrat/delete", component:DeleteContratComponent},
  {path:"contrat/getById", component:GetByIdContratComponent},
  {path:"contrat/getAll", component:GetAllContratComponent},

  {path:"proprietaire/add", component:AddProprietaireComponent},
  {path:"proprietaire/update", component:UpdateProprietaireComponent},
  {path:"proprietaire/delete", component:DeleteProprietaireComponent},
  {path:"proprietaire/getById", component:GetByIdProprietaireComponent},
  {path:"proprietaire/getAll", component:GetAllProprietaireComponent},

  {path:"visite/add", component:AddVisiteComponent},
  {path:"visite/update", component:UpdateVisiteComponent},
  {path:"visite/delete", component:DeleteVisiteComponent},
  {path:"visite/getById", component:GetByIdVisiteComponent},
  {path:"visite/getAll", component:GetAllVisiteComponent},

  {path:"**", component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
