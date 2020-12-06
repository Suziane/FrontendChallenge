import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PlayersRegistrationComponent } from 'src/pages/players-registration/players-registration.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { CompetitionComponent } from 'src/pages/competition/competition.component';
import { RedirectCompetitionComponent } from '../pages/redirect-competition/redirect-competition.component';
import { WinnerComponent } from '../pages/winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersRegistrationComponent,
    HomeComponent,
    CompetitionComponent,
    RedirectCompetitionComponent,
    WinnerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    /* Angular Material */
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
