import {
    Button,
    createStyles,
    IconButton,
    Snackbar as MuiSnackbar,
    Theme,
    WithStyles,
    withStyles
} from "@material-ui/core";
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {pollMessage} from "../actions/MessageActions";
import {IAppState} from "../reducers/RootReducer";

interface IState {
    enabled: boolean;
}

interface IProps extends WithStyles<typeof styles>, IStateProps, IDispatchProps {}

interface IStateProps {
    messageQueue: string[];
}

interface IDispatchProps {
    pollMessage: () => void;
}

const mapStateToProps = (state: IAppState): IStateProps => ({
    messageQueue: state.messageQueue
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    ...bindActionCreators({pollMessage}, dispatch)
});

const styles = (theme: Theme) =>
    createStyles({
        close: {
            padding: theme.spacing.unit / 2
        }
    });

class SnackBar extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            enabled: true
        };
    }

    public handleClose = (event: React.SyntheticEvent<any, Event>, reason: string) => {
        if (reason === "clickaway") {
            return;
        }
        this.setState({enabled: false});

        // wait 0.5 seconds before enabeling the snackbar again
        setTimeout(() => {
            this.setState({enabled: true});
            this.props.pollMessage();
        }, 500);
    };

    public render() {
        const {classes, messageQueue} = this.props;
        const open = messageQueue.length > 0 && this.state.enabled;

        return (
            <MuiSnackbar
                anchorOrigin={{horizontal: "left", vertical: "bottom"}}
                open={open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                message={messageQueue[0]}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SnackBar));
