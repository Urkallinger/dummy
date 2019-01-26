import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {showMessage} from "../actions/MessageActions";
import {IAppState} from "../reducers/RootReducer";

interface IProps {
  messages: string[];
  showMessage: (message: string) => void;
}
interface IState {}

const mapStateToProps = (state: IAppState) => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showMessage: (message: string) => dispatch(showMessage(message))
  };
};

class PageOne extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public onClick = () => {
    this.props.showMessage("PageOne button clicked");
  };

  public render() {
    return (
      <div>
        PageOne
        <br />
        <button onClick={this.onClick}>click me</button>
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
