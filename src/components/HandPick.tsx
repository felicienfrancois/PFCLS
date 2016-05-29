import * as React from "react";

import {Hand} from "../models/Hand";

export interface HandPickProps { hands: Hand []; onPick: (hand: Hand) => void; };

export class HandPick extends React.Component<HandPickProps, {}> {

    render() {
        return (
            <ul className="HandPick">
            {
                this.props.hands.map(hand => {
                    return <li key={"li_" + hand.id}><button key={hand.id} ref={hand.id} class={hand.id} onClick={this.props.onPick.bind(null,hand)}>{hand.name}</button></li>;
                })
            }
            </ul>
        );
    }

}
