import { expect } from "chai";

import { Hand } from "../../src/models/Hand";
import { Winner } from "../../src/models/Winner";
import { handService } from "../../src/services/HandService";

var rules = [
    {player1: Hand.ROCK, player2: Hand.ROCK, winner: Winner.DRAW},
    {player1: Hand.ROCK, player2: Hand.PAPER, winner: Winner.PLAYER2_WIN},
    {player1: Hand.ROCK, player2: Hand.SCISSORS, winner: Winner.PLAYER1_WIN},
    {player1: Hand.ROCK, player2: Hand.LIZARD, winner: Winner.PLAYER1_WIN},
    {player1: Hand.ROCK, player2: Hand.SPOCK, winner: Winner.PLAYER2_WIN},
    
    {player1: Hand.PAPER, player2: Hand.ROCK, winner: Winner.PLAYER1_WIN},
    {player1: Hand.PAPER, player2: Hand.PAPER, winner: Winner.DRAW},
    {player1: Hand.PAPER, player2: Hand.SCISSORS, winner: Winner.PLAYER2_WIN},
    {player1: Hand.PAPER, player2: Hand.LIZARD, winner: Winner.PLAYER2_WIN},
    {player1: Hand.PAPER, player2: Hand.SPOCK, winner: Winner.PLAYER1_WIN},

    {player1: Hand.SCISSORS, player2: Hand.ROCK, winner: Winner.PLAYER2_WIN},
    {player1: Hand.SCISSORS, player2: Hand.PAPER, winner: Winner.PLAYER1_WIN},
    {player1: Hand.SCISSORS, player2: Hand.SCISSORS, winner: Winner.DRAW},
    {player1: Hand.SCISSORS, player2: Hand.LIZARD, winner: Winner.PLAYER1_WIN},
    {player1: Hand.SCISSORS, player2: Hand.SPOCK, winner: Winner.PLAYER2_WIN},

    {player1: Hand.LIZARD, player2: Hand.ROCK, winner: Winner.PLAYER2_WIN},
    {player1: Hand.LIZARD, player2: Hand.PAPER, winner: Winner.PLAYER1_WIN},
    {player1: Hand.LIZARD, player2: Hand.SCISSORS, winner: Winner.PLAYER2_WIN},
    {player1: Hand.LIZARD, player2: Hand.LIZARD, winner: Winner.DRAW},
    {player1: Hand.LIZARD, player2: Hand.SPOCK, winner: Winner.PLAYER1_WIN},

    {player1: Hand.SPOCK, player2: Hand.ROCK, winner: Winner.PLAYER1_WIN},
    {player1: Hand.SPOCK, player2: Hand.PAPER, winner: Winner.PLAYER2_WIN},
    {player1: Hand.SPOCK, player2: Hand.SCISSORS, winner: Winner.PLAYER1_WIN},
    {player1: Hand.SPOCK, player2: Hand.LIZARD, winner: Winner.PLAYER2_WIN},
    {player1: Hand.SPOCK, player2: Hand.SPOCK, winner: Winner.DRAW}
];

describe("handService.match()", function () {
    rules.forEach(function _testRule(rule){
        var expectedResult = rule.winner === Winner.DRAW ? "draw" : rule.winner === Winner.PLAYER1_WIN ? "win" : "loose";
        it(`${rule.player1} ${expectedResult} against ${rule.player2}`, function () {
            expect(handService.match(rule.player1, rule.player2).winner).to.equals(rule.winner);
        });
    });
});