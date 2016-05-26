import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hand } from "./models/Hand";
import { Confirm } from "./components/Confirm";
import { HandPick } from "./components/HandPick";
import { CountDown } from "./components/CountDown";
import { handService } from "./services/HandService";

let hands = [Hand.ROCK, Hand.PAPER, Hand.SCISSORS, Hand.LIZARD, Hand.SPOCK];
let main = document.getElementById("main");
let player1Hand : Hand;
let player2Hand : Hand;
