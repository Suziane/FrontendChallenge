import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  public player: Player = new Player();

  constructor() { }

  ngOnInit() {
    this.player = JSON.parse(sessionStorage.getItem('Winner'));
    sessionStorage.clear();
  }

}
