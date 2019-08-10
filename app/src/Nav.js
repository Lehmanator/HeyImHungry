/**
 * @class       : Nav
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 17:33:06 EDT
 * @description : Nav
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { NavDrawer } from "./NavDrawer";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMoreAnchorEl: null,
      drawerOpened: false
    };
    this.toggleDrawer.bind(this);
  }
  toggleDrawer = boolVal => () => {
    this.setState({
      drawerOpened: boolVal
    });
  };
  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };
  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  render() {
    const { anchorEl, mobileMoreAnchorEl, drawerOpened } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          Messages
        </MenuItem>
      </Menu>
    );
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
              style={{
                position: 'absolute',
                left: 10,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              disply="block"
              style={{
                paddingLeft: 40,
                minWidth: 190,
              }}
            >
              Hey, I'm Hungry!
            </Typography>
            <div
              className="searchBar"
              style={{
                position: "relative",
                borderRadius: 6,
                backgroundColor: "#FFFFFF16",
                marginLeft: "15px",
                marginRight: "20px",
                width: "80%",
                padding: "0px 0px 0px 10px"
              }}
            >
              <div
                className="searchIcon"
                style={{
                  position: "absolute",
                  top: 3,
                  width: "27px",
                  height: "90%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search for food..."
                style={{
                  paddingTop: "8px",
                  paddingBottom: "5px",
                  paddingLeft: "35px",
                  color: "inherit",
                  width: "100%",
                }}
              />
            </div>

            <div className="overflow" style={{ position: 'absolute', right: 0 }}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
              {renderMobileMenu}
            </div>
          </Toolbar>
        </AppBar>
        <NavDrawer
          drawerOpened={this.state.drawerOpened}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  }
}
export default Nav;
