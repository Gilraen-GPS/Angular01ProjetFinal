import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './security/home';
import { LoginComponent } from './security/login';
import { AuthGuard } from './security/_guards';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);