import { Component, OnInit } from '@angular/core';
import { GameOperatorService } from '../services/game-operator.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {

  constructor(public gameoperator:GameOperatorService) {

  }

  ngOnInit() {
    this.gameoperator.startNewGame();
  }

}
