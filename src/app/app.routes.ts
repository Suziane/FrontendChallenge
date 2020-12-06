import { Routes } from '@angular/router';
import { CompetitionComponent } from 'src/pages/competition/competition.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { PlayersRegistrationComponent } from 'src/pages/players-registration/players-registration.component';
import { RedirectCompetitionComponent } from 'src/pages/redirect-competition/redirect-competition.component';
import { WinnerComponent } from 'src/pages/winner/winner.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' },
    },
    {
        path: 'competition',
        component: CompetitionComponent,
        data: { title: 'Competição' },
    },
    {
        path: 'winner',
        component: WinnerComponent,
        data: { title: 'Ganhador' },
    },
    {
        path: 'redirect',
        component: RedirectCompetitionComponent,
        data: { title: 'Redirect' },
    },
    {
        path: 'players-registration',
        component: PlayersRegistrationComponent,
        data: { title: 'Cadastro de Jogadores'},
    },
];
