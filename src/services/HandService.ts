import {Hand} from "../models/Hand";
import {Winner} from "../models/Winner";

export interface HandService {
    match(player1: Hand, player2: Hand) : {winner: Winner, whatHappened: string};
}

// singleton
export var handService : HandService = new HandServiceImpl();