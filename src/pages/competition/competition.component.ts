import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player';
import * as _ from 'lodash';
import { Battles } from 'src/models/battles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  public listPlayer: any;
  public listRaffled: any = [];
  public battles: Battles = new Battles();
  public listBattles: Battles[] = [];
  public player: Player = new Player();
  public listOfWin: any = [];
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loadPlayers();
  }

  public loadPlayers() {
    this.listPlayer = JSON.parse(sessionStorage.getItem('Players'));
    this.loadIdPlayers();
  }

  public generateBattles() {
    const numberOfBattes = this.listPlayer.length / 2;
    while (numberOfBattes !== this.listBattles.length) {
      this.createOneBattles();
    }
  }

  public loadIdPlayers() {
    let countIdPlayer = 1;
    const listIdPlayer = [];
    this.listPlayer.forEach((player) => {
      player.id = countIdPlayer;
      listIdPlayer.push(player);
      countIdPlayer = countIdPlayer + 1;
    });
    this.listPlayer = [];
    this.listPlayer = listIdPlayer;
    this.generateBattles();
  }

  public createOneBattles() {
    this.battles = new Battles();
    let raffled = 0;
    let checkRaffed;

    while (this.battles.playerOne === undefined) {
      raffled = Math.floor((Math.random() * this.listPlayer.length) + 1);
      checkRaffed = _.filter(this.listRaffled, ((o) => o === raffled));
      if (checkRaffed.length === 0) {
        this.listRaffled.push(raffled);
        this.battles.playerOne = _.filter(this.listPlayer, ((o) => o.id === raffled))[0];
      }
    }
    while (this.battles.playerTwo === undefined) {
      raffled = Math.floor((Math.random() * this.listPlayer.length) + 1);
      checkRaffed = _.filter(this.listRaffled, ((o) => o === raffled));
      if (checkRaffed.length === 0) {
        this.listRaffled.push(raffled);
        this.battles.playerTwo = _.filter(this.listPlayer, ((o) => o.id === raffled))[0];
      }
    }
    this.listBattles.push(this.battles);
  }

  public finishBattles(battles) {
    if (!battles.winPlayer) {
      alert('Favor selecionar o vencedor da batalha.');
    } else {
      battles.winningPlayer = new Player();
      if (battles.winPlayer === 1) {
        battles.winningPlayer = battles.playerOne;
      } else {
        if (battles.winPlayer === 2) {
          battles.winningPlayer = battles.playerTwo;
        }
      }
    }
  }

  public finishPhase() {
    this.listOfWin = [];
    this.listBattles.forEach((battle) => {
      if (battle.winningPlayer === undefined) {
        alert('Favor concluir todas as batalhas antes de prosseguir.');
      } else {
        this.listOfWin.push(battle.winningPlayer);
      }
    });
    sessionStorage.setItem('Players', JSON.stringify(this.listOfWin));
    if (this.listBattles.length > 1) {
      this.reloadPage();
    }
  }

  public finishTournament() {
    this.finishPhase();
    const winTournament = this.listOfWin[0];
    sessionStorage.setItem('Winner', JSON.stringify(winTournament));
    this.router.navigate(['/winner']);
  }

  public reloadPage() {
    this.listPlayer = [];
    this.listRaffled = [];
    this.battles = new Battles();
    this.listBattles = [];
    this.player = new Player();
    this.listOfWin = [];
    this.router.navigate(['/redirect']);
  }
}
