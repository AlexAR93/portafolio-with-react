import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code'; // Ícono de programación

const navItems = ['Inicio', 'Portafolio', 'Contacto'];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <AppBar component="nav">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <CodeIcon sx={{ mr: 1 }} /> 
          <Typography variant="h6" component="div">
            Alex Rodriguez
          </Typography>
        </Box>

        <IconButton 
          color="inherit" 
          onClick={handleMenuToggle} 
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <NavLink key={item} to={`/${item.toLowerCase()}`}>
              {({ isActive }) => (
                <Button className={isActive ? 'active2' : ''} sx={{ color: 'inherit' }}>
                  {item}
                </Button>
              )}
            </NavLink>
          ))}
        </Box>
      </Toolbar>

      {/* Menú tipo acordeón en móviles */}
      <Collapse in={open} timeout="auto" sx={{ display: { sm: 'none' }, width: '100%', bgcolor: 'primary.main' }}>
        <Box sx={{ textAlign: 'center', py: 1 }}>
          {navItems.map((item) => (
            <NavLink key={item} to={`/${item.toLowerCase()}`}>
              {({ isActive }) => (
                <Button className={isActive ? 'active2' : ''} sx={{ color: 'inherit', width: '100%' }}>
                  {item}
                </Button>
              )}
            </NavLink>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
};
