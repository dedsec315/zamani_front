import React from 'react';
import { Drawer, List, Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Numbers from '@mui/icons-material/Numbers';
import MenuIcon from '@mui/icons-material/Menu'; // Icône de menu
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const item = {
  py: '2px',
  px: 3,
  color: 'Dark',
  '&:hover, &:focus': {
    bgcolor: 'Dark',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255, 0, 166) inset',
  py: 1.5,
  px: 3,
};

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
  });

  const categories = [
    {
      id: 'Consultation de Solde',
      children: [
        { id: 'Consultation de Solde par numéro', icon: <Numbers />, path: '/ByNumber' },
      ],
    },
  ];

  if (props.isAdmin) {
    categories[0].children.push({ id: 'Ajouter un nouvel utilisateur', icon: <AddIcon />, path: '/AddNewUser' });
  }

  const handleHomeClick = () => {
    window.location.href = "/PagePrincipale";
  };

  const handleItemClick = (path) => {
    window.location.href = path;
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Drawer
        anchor="left" // Position en haut
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        <List disablePadding>
          <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: 'rgb(255, 0, 166)' }}>
            ZAMANI TELECOM
          </ListItem>
          <ListItem sx={{ ...item, ...itemCategory }} onClick={handleHomeClick}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemButton><b>Accueil</b></ListItemButton>
          </ListItem>
          {categories.map(({ id, children }) => (
            <Box key={id} sx={{ bgcolor: 'White' }}>
              <ListItem sx={{ py: 2, px: 3 }}>
                <ListItemText sx={{ color: 'rgb(255, 0, 166)' }}>{id}</ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, path }) => (
                <ListItem disablePadding key={childId}>
                  <ListItemButton sx={item} onClick={() => handleItemClick(path)}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={toggleDrawer('left', true)}
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ position: 'fixed', top: 0, left: 0 }} // Position de l'icône
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}
