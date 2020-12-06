import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Player } from 'src/models/player';


@Component({
  selector: 'app-players-registration',
  templateUrl: './players-registration.component.html',
  styleUrls: ['./players-registration.component.css'],
})
export class PlayersRegistrationComponent implements OnInit {

  public player: Player = new Player();
  public listPlayer: Player[] = [];
  public countPlayer: number;
  public displayedColumns: string[] = ['id', 'region', 'heroName'];
  public dataSource: any = new MatTableDataSource();


  constructor(private router: Router
    ) {
      this.countPlayer = 0;
    }

  ngOnInit() {
}

  public savePlayer(player) {
  if (!player.region || !player.heroName) {
    alert('Favor preencher todas as informações do jogador!');
  } else {
    this.countPlayer = this.countPlayer + 1;
    player.id = this.countPlayer;
    this.listPlayer.push(player);
    this.clearPlayer();
    this.dataSource = new MatTableDataSource(this.listPlayer);
    sessionStorage.setItem('Players', JSON.stringify(this.listPlayer));
  }
}

  public clearPlayer() {
  this.player = new Player();
}

  public startTourneament() {
  if (this.countPlayer === 2 || this.countPlayer === 4 || this.countPlayer === 8 || this.countPlayer === 16 || this.countPlayer === 32 ||
    this.countPlayer === 64 || this.countPlayer === 128 || this.countPlayer === 256) {
    this.router.navigate(['/competition']);
  } else {
    alert('Favor preencher um número de jogadores válido! Exemplo: (2, 4, 8, 16, 32 , 64 ...)');
  }
}
}
