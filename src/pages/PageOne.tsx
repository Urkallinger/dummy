import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {pollMessage, showMessage} from "../actions/MessageActions";
import {IAppState} from "../reducers/RootReducer";

interface IProps {
    messages: string[];
    showMessage: (message: string) => void;
    pollMessage: () => void;
}
const mapStateToProps = (state: IAppState) => {
    return {
        messages: state.messageQueue
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        pollMessage: () => dispatch(pollMessage()),
        showMessage: (message: string) => dispatch(showMessage(message))
    };
};

class PageOne extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    public onShowMsg = () => {
        this.props.showMessage(`${Math.round(Math.random() * 100)}`);
    };

    public onPollMsg = () => {
        this.props.pollMessage();
    };

    public render() {
        return (
            <div>
                PageOne
                <br />
                <button onClick={this.onShowMsg}>show Message</button>
                &nbsp;
                <button onClick={this.onPollMsg}>poll Message</button>
                <br />
                <ul>
                    {this.props.messages.map((msg, idx) => (
                        <li key={idx}>{msg}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageOne);
