/**
 * @class       : Nav
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 17:33:06 EDT
 * @description : Nav
 */
import React, { Component } from "react";

import {
  AppBar,
  Avatar, Button, IconButton, Badge,
  Divider, Drawer,
  InputBase,
  List, ListItem, ListItemIcon, ListItemText,
  Menu, MenuItem,
  Toolbar, Typography,
} from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import InfoIcon from '@material-ui/icons/Info';
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import NavigationIcon from '@material-ui/icons/Navigation';
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from '@material-ui/icons/Settings';

import { withStyles, withTheme } from '@material-ui/styles';

import { NavDrawer } from "./NavDrawer";

const style = theme => ({
  drawerHeader: {
    marginLeft: -5,
    marginTop: -5,
  },
  searchBar: {
    position: "relative",
    borderRadius: 6,
    backgroundColor: "#FFFFFF16",
    marginLeft: "15px",
    marginRight: "20px",
    width: "80%",
    padding: "0px 0px 0px 10px"
  },
  searchIcon: {
    position: "absolute",
    top: 3,
    width: "27px",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  searchInput: {
    paddingTop: "8px",
    paddingBottom: "5px",
    paddingLeft: "35px",
    color: "inherit",
    width: "100%",
  },
  menuButton: {
    position: 'absolute',
    left: 10,
  },
  title: {
    paddingLeft: 40,
    minWidth: 190,
  },
  overflow: {
    position: 'absolute',
    right: 0
  },
  user: {
    marginRight: 25,
  }
});

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMoreAnchorEl: null,
      drawerOpened: false
    };
    this.toggleDrawer.bind(this);
  }
  toggleDrawer = boolVal => () => { this.setState({ drawerOpened: boolVal }); };
  handleMenuOpen = event => { this.setState({ mobileMoreAnchorEl: event.currentTarget }); };
  handleMenuClose = (selection) => {
    this.setState({ mobileMoreAnchorEl: null });
    if (selection == "about") {
      // TODO: Handle opening new UI
    }
  };
  renderDrawer(open) {
    const { classes } = this.props;
    return (
      <Drawer anchor="left" open={this.state.drawerOpened} onClose={this.toggleDrawer(false)}>
        <div onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
          <List>
            <ListItem className={classes.drawerHeader}>
              <IconButton onClick={this.toggleDrawer(false)}><MenuIcon /></IconButton>
              <ListItemText primary="Hey, I'm Hungry!" />
            </ListItem>
            <Divider />
            {['Home', 'Map'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <NavigationIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Your Donations', 'Your Reservations'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <FastfoodIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    );
  }
  renderMenu() {
    const { anchorEl, mobileMoreAnchorEl, drawerOpened } = this.state;
    const isMenuOpen = Boolean(mobileMoreAnchorEl);
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary"><MailIcon /></Badge>
          </IconButton>Messages
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit"><SettingsIcon /></IconButton>Settings
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit"><InfoIcon /></IconButton>About
        </MenuItem>
      </Menu>
    );
  }
  renderSearchbar() {
    const { classes } = this.props;
    return (
      <div className={classes.searchBar}>
        <div className={classes.searchIcon}><SearchIcon /></div>
        <InputBase placeholder="Search for food..." className={classes.searchInput} />
      </div>
    );
  }
  renderUser(auth) {
    const { classes } = this.props;
    if (auth) {
      return (
        <IconButton color="inherit" className={classes.user}>
          <Badge badgeContent={4} color="secondary">
            <Avatar />
          </Badge>
        </IconButton>
      );
    } else {
      return (<Button color="inherit" className={classes.user}>Login</Button>);
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)} className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography ariant="h6" color="inherit" className={classes.title}>Hey, I'm Hungry!</Typography>
            {this.renderSearchbar()}
            {this.renderUser(this.props.auth)}
            <div className={classes.overflow}>
              <IconButton aria-haspopup="true" onClick={this.handleMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
              {this.renderMenu()}
            </div>
          </Toolbar>
        </AppBar>
        {this.renderDrawer()}

      </div>
    );
  }
}
export default withStyles(style)(Nav);
