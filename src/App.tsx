import {MuiThemeProvider} from "@material-ui/core";
import React, {Component} from "react";
import SnackBar from "./components/SnackBar";
import theme from "./constants/Theme";
import PageOne from "./pages/PageOne";

class App extends Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <SnackBar />
                <PageOne />
            </MuiThemeProvider>
        );
    }
}

export default App;
