/**
 * @class       : NavDrawer
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 17:39:33 EDT
 * @description : NavDrawer
 */
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <div className="drawerHeader">
            <IconButton onClick={this.props.toggleDrawer(false)}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Home', 'Map'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Donations', 'Reservations'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    );
  }
}
