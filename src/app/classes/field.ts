import { Card } from '../classes/card';

export class Field {
  private defenseCards:Card[] = [];
  private handCards:Card[] = [];
  private discardPile:Card[] = [];
  private playArea:Card[] = [];


  addToPlayArea(card){
    this.clearPlayArea();
    console.log("ADDING CARD TO PLAY AREA");
    console.log(card);
    this.playArea.push(card);
  }

  clearPlayArea(){
    console.log("CLEARING PLAY AREA");
    for(let card of this.playArea){
      this.discardPile.push(card);
    }
    this.playArea = [];
  }

  getPlayArea(){
    return this.playArea;
  }

  addHandCards(cards){
    for(let card of cards){
      this.handCards.push(card);
    }
  }

  setHandCards(cards){
    this.handCards = cards;
  }

  getHandCards(){
    return this.handCards;
  }

  playHandCard(index){
    console.log("Playing "+this.handCards[index].name+" from hand");
    var cardToPlay:Card = this.handCards.splice(index,1)[0];
    if(cardToPlay.type.toLowerCase().trim() == "defense"){
      this.setDefenseCard(cardToPlay);
    } else if(cardToPlay.type.toLowerCase().trim() == "attack") {
      this.addToPlayArea(cardToPlay);
    }
    return cardToPlay.effect;
  }

  setDefenseCard(card){
    console.log("ADDING CARD TO DEFENSE ZONE");
    console.log(card);
    if(this.defenseCards.length<4){
      this.defenseCards.push(card);
    } else {
      console.log("DEFENSE CARDS FULL - DEFENSE CARD SET DECLINED");
      return false;
    }
  }

  getDefenseCards(){
    return this.defenseCards;
  }

  playDefenseCard(index){
    console.log("Playing "+this.defenseCards[index].name+" from defense");
    var cardToPlay:Card = this.defenseCards.splice(index,1)[0];
    this.discardPile.push(cardToPlay);
    return cardToPlay.effect;
  }

  getDiscardPile(){
    return this.discardPile;
  }

  showInfo(card){
    console.log(card);
  }
}
