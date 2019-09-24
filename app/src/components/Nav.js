/**
 * @class       : Nav
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 17:33:06 EDT
 * @description : Nav
 */
import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Avatar, Button, IconButton, Badge,
  Divider, Drawer,
  Icon, InputBase, Link,
  List, ListItem, ListItemIcon, ListItemText, ListSubheader,
  Menu, MenuItem, MenuList,
  Toolbar, Typography,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HistoryIcon from '@material-ui/icons/History';
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

import logo from '../assets/images/icon.png';
import * as ROUTES from '../Routes';

const style = theme => ({
  drawerFooter: {
    position: "absolute",
    bottom: 0,
  },
  homeButton: {
    margin: 2,
    minWidth: 180,
  },
  menuButton: {
    marginRight: 2,
  },
  overflowButton: {

  },
  userButton: {

  },
  navImage: {
    height: 32,
    width: 32,
    marginRight: 8,
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
});

// The use of React.forwardRef will no longer be required for react-router-dom v6.
const homeLink = React.forwardRef((props, ref) => (<RouterLink innerRef={ref} to="/" {...props} />));
const loginLink = React.forwardRef((props, ref) => (<RouterLink innerRef={ref} to="/signin" {...props} />));


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
      <Drawer
        anchor="left"
        open={this.state.drawerOpened}
        onClose={this.toggleDrawer(false)}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            edge="start"
            onClick={this.toggleDrawer(false)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Button
            color="inherit"
            className={classes.homeButton}
            component={homeLink}
          >
            <img className={classes.navImage} src={logo} />
            <Typography variant="subtitle2" noWrap>Hey, I'm Hungry!</Typography>
          </Button>
        </Toolbar>
        <Divider />
        <div onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
          <List subheader={<ListSubheader>Browse</ListSubheader>}>
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon><NavigationIcon /></ListItemIcon>
              <ListItemText>Map</ListItemText>
            </ListItem>
          </List>
          <List subheader={<ListSubheader>Your stuff</ListSubheader>}>
            <ListItem button>
              <ListItemIcon><FaceIcon /></ListItemIcon>
              <ListItemText>Your Profile</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon><Badge badgeContent={1}><MailIcon />
              </Badge></ListItemIcon>
              <ListItemText>Messages</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon><Badge badgeContent={1}><InboxIcon />
              </Badge></ListItemIcon>
              <ListItemText>Active Donations</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon><Badge badgeContent={1}>
                <FastfoodIcon /></Badge>
              </ListItemIcon>
              <ListItemText>Active Reservations</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon><HistoryIcon /></ListItemIcon>
              <ListItemText>History</ListItemText>
            </ListItem>
          </List>
          <List subheader={<ListSubheader>About</ListSubheader>}>
            <ListItem button>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText>About Us</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText>How can I help?</ListItemText>
            </ListItem>
          </List>
          <List className={classes.drawerFooter}>
            <Divider />
            <ListItem button>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer >
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
        <MenuList>
          <MenuItem onClick={this.handleMenuClose}>
            <ListItemIcon color="inherit">
              <Badge badgeContent={4} color="secondary"><MailIcon /></Badge>
            </ListItemIcon>Messages
          </MenuItem>
          <MenuItem onClick={this.handleMenuClose}>
            <ListItemIcon color="inherit"><SettingsIcon /></ListItemIcon>Settings
          </MenuItem>
          <MenuItem onClick={this.handleMenuClose}>
            <ListItemIcon color="inherit"><InfoIcon /></ListItemIcon>About
          </MenuItem>
        </MenuList>
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
        <IconButton color="inherit" className={classes.userButton}>
          <Badge badgeContent={4} color="secondary">
            <Avatar />
          </Badge>
        </IconButton>
      );
    } else {
      return (
        <Button
          color="inherit"
          className={classes.userButton}
          component={loginLink}
        >Login
        </Button>
      );
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={this.toggleDrawer(true)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Button
              color="inherit"
              className={classes.homeButton}
              component={homeLink}
            >
              <img className={classes.navImage} src={logo} />
              <Typography variant="subtitle2" noWrap>Hey, I'm Hungry!</Typography>
            </Button>
            {this.renderSearchbar()}
            {this.renderUser(this.props.auth)}
            <IconButton
              color="inherit"
              aria-haspopup="true"
              edge="end"
              onClick={this.handleMenuOpen}
              className={classes.overflowButton}
            >
              <MoreIcon />
            </IconButton>
            {this.renderMenu()}
          </Toolbar>
        </AppBar>
        {this.renderDrawer()}
      </div>
    );
  }
}
export default withStyles(style)(Nav);
