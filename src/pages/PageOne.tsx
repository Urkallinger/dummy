import React, {Component} from "react";
import {connect} from "react-redux";

interface IProps {}
interface IState {}

const mapStateToProps = (state: any, ownProps: IProps) => {
  return {};
};

const mapDispatchToProps = (dispatch: any, ownProps: IProps) => {
  return {};
};

class PageOne extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div>PageOne</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageOne);
