export class Card {
  name ="";
  description = "";
  effect = [];
  type = "";

  constructor(name,description,effect,type){
    this.name=name;
    this.description=description;
    this.effect = effect;
    this.type = type;
  }
}
