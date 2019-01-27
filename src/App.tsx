import { MuiThemeProvider, Snackbar } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import SnackBar from "./components/SnackBar";
import theme from "./constants/Theme";
import PageOne from "./pages/PageOne";
import store from "./store/Store";

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
