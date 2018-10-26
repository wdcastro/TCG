import { Injectable } from '@angular/core';
import { Card } from '../classes/card';
import { Deck } from '../classes/deck';
import { Field } from '../classes/field';
import { GameSession } from '../classes/gamesession';


@Injectable({
  providedIn: 'root'
})
export class GameOperatorService {

  currentGame:GameSession;
  myField:Field;
  enemyField:Field;
  myActionCount;
  enemyActionCount;
  turnOrder;
  currentTurn;
  turnCount;
  playerName;

  card1:Card = new Card("a","",[],"defense");
  card2:Card = new Card("b","",[],"attack");
  unknowncard:Card = new Card("?","",[],"none");
  constructor() {

  }

  startNewGame(){
    //initialize variables
    this.currentGame = new GameSession();
    this.myField = new Field();
    this.enemyField = new Field();
    this.myActionCount = 0;
    this.enemyActionCount = 0;

    this.turnOrder=["player a","player b"];
    this.playerName="player a";
    this.currentTurn = 0;
    this.turnCount = 0;
    //negotiate with server
    //server deals hand
    //process hand dealt
    this.processHandDealt();

    //negotiate with server
    //get enemy Field
    //process field displayed
    this.processEnemyField();
    this.nextTurn();
  }

  nextTurn(){
    console.log("NEW TURN");

    if(this.turnCount!=0){
      this.currentTurn++;
    }
    this.turnCount++;

    if(this.currentTurn == this.turnOrder.length){
      this.currentTurn = 0;
    }
    if(this.turnOrder[this.currentTurn] == this.playerName){
      this.executeBeginningPhase();
    } else {
      this.endTurn();
    }

    //start turn actions
  }

  endTurn(){
    //endingPhase
    //if(turnPlayer has more than 10 cards){discard}
    this.nextTurn();
  }


  doAction(action,value){
    if(this.turnOrder[this.currentTurn] == this.playerName){
      this.myActionCount--;
      console.log("Remaining Actions: "+this.myActionCount);
      switch(action.toLowerCase().trim()){
        case "playhand":
        this.myField.playHandCard(value);
        break;
        case "playdefense":
        this.myField.playDefenseCard(value);
        break;
        case "equip":
        break;
        case "power":
        break;
        case "draw":
        break;
        default:
        console.error("Unknown action "+action);
        console.error(action);
      }
      value;
      if(this.myActionCount==0){
        this.endTurn();
      }
    } else {
    }
  }

  //phases//
  //beginning phase
  executeBeginningPhase(){
    console.log("BEGINNING PHASE");
    //if myturn
    //server request draw one card
    this.processDrawCard();
    this.processGainActions();
  }

  processDrawCard(){
    var cards = [this.card1];
    console.log("Drew "+cards.length+" card(s)");
    console.log(cards);
    this.myField.addHandCards(cards);
  }

  processGainActions(){
    this.myActionCount++;
  }

  processHandDealt(){
    console.log("processing hand dealt");
    this.myField.setHandCards([this.card1,this.card2,this.card1,this.card2,this.card2]);
  }

  processEnemyField(){
    this.enemyField.setHandCards([this.unknowncard,this.unknowncard,this.unknowncard,this.unknowncard,this.unknowncard]);
  }
}
