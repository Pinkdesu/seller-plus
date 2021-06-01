import React from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const NavItem = (props) => {
  const history = useHistory();

  const { primary, path, icon } = props;

  const handleClick = () => {
    history.push(path);
  };

  return (
    <ListItem onClick={handleClick} button>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default NavItem;
