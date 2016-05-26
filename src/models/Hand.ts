export class Hand {
    static ROCK = new Hand("rock", "Pierre", {
        "lizard" : "La Pierre �crase le L�zard",
        "scissors" : "La Pierre �mousse les Ciseaux"
    });
    static PAPER = new Hand("paper", "Feuille", {
        "rock" : "La Feuille recouvre la Pierre",
        "spock" : "La Feuille discr�dite Spock"
    });
    static SCISSORS = new Hand("scissors", "Ciseaux", {
        "lizard" : "Les Ciseaux d�capite le L�zard",
        "paper" : "Les Ciseaux coupe la Feuille"
    });
    static LIZARD = new Hand("lizard", "L�zard", {
        "paper" : "Le L�zard mange la Feuille",
        "spock" : "Le L�zard empoisonne Spock"
    });
    static SPOCK = new Hand("spock", "Spock", {
        "rock" : "Spock vaporise la Pierre",
        "scissors" : "Spock casse les Ciseaux"
    });
    
    id : string;
    name : string;
    defeat : {[handId: string] : string};
    
    constructor(id: string, name : string, defeat: {[handId: string] : string}) {
        this.id = id;
        this.name = name;
        this.defeat = defeat;
    }
    
    equals(hand: Hand) : boolean {
        return hand.id === this.id;
    }
}