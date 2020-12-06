import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-competition',
  templateUrl: './redirect-competition.component.html',
  styleUrls: ['./redirect-competition.component.css']
})
export class RedirectCompetitionComponent implements OnInit {
  public listPlayer: any;
  public numberOfPhases: number;

  constructor(private router: Router) {
    this.numberOfPhases = 0;
  }

  ngOnInit() {
    this.loadPlayers();
  }

  public loadPlayers() {
    this.listPlayer = JSON.parse(sessionStorage.getItem('Players'));
    this.checkNumberOfPhases();
  }

  public checkNumberOfPhases() {
    let result = false;
    let numberPlayer = this.listPlayer.length;
    while (result === false) {
      const resultDivision = numberPlayer / 2;
      if (resultDivision === 1) {
        result = true;
      }
      numberPlayer = resultDivision;
      this.numberOfPhases = this.numberOfPhases + 1;
    }
  }


}
