import {Hand} from "../models/Hand";
import {Winner} from "../models/Winner";

export interface HandService {
    match(player1: Hand, player2: Hand) : {winner: Winner, whatHappened: string};
}

class HandServiceImpl implements HandService {

    match(player1: Hand, player2: Hand) : {winner: Winner, whatHappened: string} {
        if (player1.equals(player2)) {
            return {
                winner : Winner.DRAW,
                whatHappened : "Egalité"
            };
        }
        if (player1.defeat[player2.id]) {
            return {
                winner : Winner.PLAYER1_WIN,
                whatHappened : player1.defeat[player2.id]
            };
        }
        if (player2.defeat[player1.id]) {
            return {
                winner : Winner.PLAYER2_WIN,
                whatHappened : player2.defeat[player1.id]
            };
        }
        return {
            winner : Winner.UNKNOWN,
            whatHappened : "Résultat inconnu"
        };
    }

}

// singleton
export var handService : HandService = new HandServiceImpl();