export class Player{
    hp: number;
    cards: any;
    status: string;
    constructor(hp: number, cards: any, status: string){
        this.hp = hp;
        this.cards = cards;
        this.status = status;
    }
}