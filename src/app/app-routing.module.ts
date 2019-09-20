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
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/services/auth.guard';
import { AccueilPrimaireComponent } from './accueil-primaire/accueil-primaire.component';
import { BienImmoClientComponent } from './bien-immo-client/bien-immo-client.component';
import { BienImmoPropComponent } from './bien-immo-prop/bien-immo-prop.component';


const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"welcome-primaire", component:AccueilPrimaireComponent},
  {path:"welcome", component:AccueilComponent},
  {path:"login", component:LoginComponent},

  {path:"aAcheterClient", component:BienImmoClientComponent},
  {path:"ajoutBienProp", component:BienImmoPropComponent},

  {path:"aAcheter/add", component:AddAAcheterComponent, canActivate:[AuthGuard]},
  {path:"aAcheter/update", component:UpdateAAcheterComponent, canActivate:[AuthGuard]},
  {path:"aAcheter/delete", component:DeleteAAcheterComponent, canActivate:[AuthGuard]},
  {path:"aAcheter/getById", component:GetByIdAAcheterComponent, canActivate:[AuthGuard]},
  {path:"aAcheter/getAll", component:GetAllAAcheterComponent, canActivate:[AuthGuard]},

  {path:"aLouer/add", component:AddALouerComponent, canActivate:[AuthGuard]},
  {path:"aLouer/update", component:UpdateALouerComponent, canActivate:[AuthGuard]},
  {path:"aLouer/delete", component:DeleteALouerComponent, canActivate:[AuthGuard]},
  {path:"aLouer/getById", component:GetByIdALouerComponent, canActivate:[AuthGuard]},
  {path:"aLouer/getAll", component:GetAllALouerComponent, canActivate:[AuthGuard]},

  {path:"agent/add", component:AddAgentComponent, canActivate:[AuthGuard]},
  {path:"agent/update", component:UpdateAgentComponent, canActivate:[AuthGuard]},
  {path:"agent/delete", component:DeleteAgentComponent, canActivate:[AuthGuard]},
  {path:"agent/getById", component:GetByIdAgentComponent, canActivate:[AuthGuard]},
  {path:"agent/getAll", component:GetAllAgentComponent, canActivate:[AuthGuard]},

  {path:"categorie/add", component:AddCategorieComponent, canActivate:[AuthGuard]},
  {path:"categorie/update", component:UpdateCategorieComponent, canActivate:[AuthGuard]},
  {path:"categorie/delete", component:DeleteCategorieComponent, canActivate:[AuthGuard]},
  {path:"categorie/getById", component:GetByIdCategorieComponent, canActivate:[AuthGuard]},
  {path:"categorie/getAll", component:GetAllCategorieComponent, canActivate:[AuthGuard]},

  {path:"client/add", component:AddClientComponent, canActivate:[AuthGuard]},
  {path:"client/update", component:UpdateClientComponent, canActivate:[AuthGuard]},
  {path:"client/delete", component:DeleteClientComponent, canActivate:[AuthGuard]},
  {path:"client/getById", component:GetByIdClientComponent, canActivate:[AuthGuard]},
  {path:"client/getAll", component:GetAllClientComponent, canActivate:[AuthGuard]},

  {path:"contrat/add", component:AddContratComponent, canActivate:[AuthGuard]},
  {path:"contrat/update", component:UpdateContratComponent, canActivate:[AuthGuard]},
  {path:"contrat/delete", component:DeleteContratComponent, canActivate:[AuthGuard]},
  {path:"contrat/getById", component:GetByIdContratComponent, canActivate:[AuthGuard]},
  {path:"contrat/getAll", component:GetAllContratComponent, canActivate:[AuthGuard]},

  {path:"proprietaire/add", component:AddProprietaireComponent, canActivate:[AuthGuard]},
  {path:"proprietaire/update", component:UpdateProprietaireComponent, canActivate:[AuthGuard]},
  {path:"proprietaire/delete", component:DeleteProprietaireComponent, canActivate:[AuthGuard]},
  {path:"proprietaire/getById", component:GetByIdProprietaireComponent, canActivate:[AuthGuard]},
  {path:"proprietaire/getAll", component:GetAllProprietaireComponent, canActivate:[AuthGuard]},

  {path:"visite/add", component:AddVisiteComponent, canActivate:[AuthGuard]},
  {path:"visite/update", component:UpdateVisiteComponent, canActivate:[AuthGuard]},
  {path:"visite/delete", component:DeleteVisiteComponent, canActivate:[AuthGuard]},
  {path:"visite/getById", component:GetByIdVisiteComponent, canActivate:[AuthGuard]},
  {path:"visite/getAll", component:GetAllVisiteComponent, canActivate:[AuthGuard]},

  {path:"**", component:AccueilComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
