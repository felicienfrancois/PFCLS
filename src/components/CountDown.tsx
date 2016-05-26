import * as React from "react";

export interface CountDownProps { secondsRemaining : number; onEnd ?: ()=>void };
export interface CountDownState { secondsRemaining : number };

export class CountDown extends React.Component<CountDownProps, CountDownState> {
    
    private interval: number;
    state: CountDownState = {
        secondsRemaining: 0
    };
    
    private tick() {
        this.setState({
            secondsRemaining: this.state.secondsRemaining - 1
        });
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
            if (this.props.onEnd) this.props.onEnd();
        }
    }
    
    componentDidMount() {
        this.setState({ secondsRemaining: this.props.secondsRemaining });
        this.interval = setInterval(this.tick, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div class="CountDown">
                <span class="remainingTime">{this.state.secondsRemaining}</span>
            </div>
        );
    }
}