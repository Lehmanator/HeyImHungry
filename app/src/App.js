import React, { Component } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Nav from "./Nav";
import BasicMap from "./BasicMap";
import Listing from "./Listing";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Nav />
        <Grid
          style={{ padding: "0 2rem", margin: "0 2rem" }}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs={12}>
            <Listing title="Food Listing" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
