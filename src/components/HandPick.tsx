import * as React from "react";

import {Hand} from "../models/Hand";

export interface HandPickProps { hands : Hand []; onPick : (hand : Hand)=>void };
export interface HandPickState { hand : Hand };

export class HandPick extends React.Component<HandPickProps, HandPickState> {
    
    render() {
        return (
            <div class="HandPick">
            {
                this.props.hands.map(hand => {
                    return <button key={hand.id} class={hand.id} onClick={this.props.onPick(hand)}>{hand.name}</button>
                })
            }
            </div>
        );
    }

}