import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/styles';
import WarningIcon from '@material-ui/icons/Warning';
const style = theme => ({
  warning: {
    background: 'red',
    color: 'white',
  }
});

class Alert extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.warning} color="red" >
        <CardContent >
          <Grid container direction="row" alignItems="flex-start">
            <Grid item><WarningIcon style={{ paddingRight: 5 }} /></Grid>
            <Grid><Typography className={classes.title} gutterBottom>{this.props.type}</Typography></Grid>
          </Grid>
          <Typography className={classes.subtitle} variant="h6" component="h2">{this.props.title}</Typography>
          <Typography className={classes.description} variant="body2" component="p">{this.props.description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
Alert.defaultProps = {
  type: 'Warning',
  title: 'Server is down.',
  description: "We're working on a fix",
};

export default withStyles(style)(Alert);
