import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

import { withStyles, withTheme } from '@material-ui/styles';

const style = theme => ({
  formButton: {
    align: "center",
    margin: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  formCheckbox: {
    marginLeft: 16,
  }
})

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  }
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
      >
        <DialogTitle>
          <Typography variant="h6" color="primary">Sign-In</Typography>
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              autoFocus
              margin="normal"
              id="name"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              autoFocus
              margin="normal"
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  // onChange={handleChange('checkedB')}
                  // value="checkedB"
                  color="primary"
                  className={classes.formCheckbox}
                />
              }
              label="Remember Me"
            />
          </form>
          <Button
            color="primary"
            size="large"
            variant="contained"
            className={classes.formButton}
            fullWidth
          >
            Create an account
          </Button>
          <Button
            color="red"
            size="normal"
            variant="outlined"
            className={classes.formButton}
          >
            Sign In with Google
              </Button>
          <Button
            color="blue"
            size="normal"
            variant="outlined"
            className={classes.formButton}
          >
            Sign In with Facebook
              </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" size="large">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary" size="large" variant="contained">
            Sign In
          </Button>
        </DialogActions>
      </Dialog >
    );
  }
}
export default withStyles(style)(SignInPage);
