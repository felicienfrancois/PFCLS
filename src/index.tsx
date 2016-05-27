import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hand } from "./models/Hand";
import { Winner } from "./models/Winner";
import { Confirm } from "./components/Confirm";
import { HandPick } from "./components/HandPick";
import { CountDown } from "./components/CountDown";
import { handService } from "./services/HandService";

let hands = [Hand.ROCK, Hand.PAPER, Hand.SCISSORS, Hand.LIZARD, Hand.SPOCK];
let main = document.getElementById("main");
let player1Hand: Hand;
let player2Hand: Hand;

player1Turn();

function player1Turn() {
    ReactDOM.render((
        <Confirm title="Joueur 1" buttonLabel="Démarrer" onConfirm={player1Pick}>
            Au tour de Joueur 1
        </Confirm>
    ), main);
}

function player1Pick() {
    ReactDOM.render((
        <div>
            <h1>Joueur 1</h1>
            <div className="content">
                <p>Choissisez un signe</p>
                <CountDown secondsRemaining={3} onEnd={function _error() {
                    displayError("Le joueur 1 n'a pas choisi un signe à temps");
                }} />
            </div>
            <HandPick hands={hands} onPick={
                function _onPick1(hand) {
                    player1Hand = hand;
                    player2Turn();
                }
            } />
        </div>
    ), main);
}

function player2Turn() {
    ReactDOM.render((
        <Confirm title="Joueur 2" buttonLabel="Démarrer" onConfirm={player2Pick}>
            Au tour de Joueur 2
        </Confirm>
    ), main);
}

function player2Pick() {
    ReactDOM.render((
        <div>
            <h1>Joueur 2</h1>
            <div className="content">
                <p>Choissisez un signe</p>
                <CountDown secondsRemaining={3} onEnd={function _error() {
                    displayError("Le joueur 2 n'a pas choisi un signe à temps");
                }} />
            </div>
            <HandPick hands={hands} onPick={
                function _onPick2(hand) {
                    player2Hand = hand;
                    displayResult();
                }
            } />
        </div>
    ), main);
}

function displayResult() {
    let matchResult = handService.match(player1Hand, player2Hand);
    let title = matchResult.winner === Winner.DRAW ? "Egalité" : matchResult.winner === Winner.PLAYER1_WIN ? "Joueur 1 gagne" : "Joueur 2 gagne";
    ReactDOM.render((
        <Confirm title={title} buttonLabel="Recommencer" onConfirm={player1Turn}>
            {matchResult.whatHappened}
        </Confirm>
    ), main);
}

function displayError(error: any) {
    ReactDOM.render((
        <Confirm title="Erreur !" buttonLabel="Recommencer" onConfirm={player1Turn}>
            {error.toString()}
        </Confirm>
    ), main);
}
