import * as React from "react";

export interface ConfirmProps { title: string; buttonLabel ?: string; onConfirm: () => void; };

export class Confirm extends React.Component<ConfirmProps, {}> {
    render() {
        return (
            <div className="Confirm">
                <h1>{this.props.title}</h1>
                <div className="content">
                    {this.props.children}
                </div>
                <button ref="button" onClick={this.props.onConfirm}>{this.props.buttonLabel || "Ok"}</button>
            </div>
        );
    }
}
