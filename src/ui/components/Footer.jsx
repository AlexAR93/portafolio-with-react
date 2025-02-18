import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        textAlign: 'center', 
        p: 2, 
        bgcolor: 'primary.main', 
        color: 'white'
      }}
    >
      <Typography variant="body1">
        Portafolio de Alex Rodriguez &copy; {new Date().getFullYear()}
      </Typography>

      {/* Íconos de redes sociales */}
      <Box sx={{ mt: 1 }}>
        <IconButton href="https://github.com/AlexAR93" target="_blank" color="inherit">
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/alex-agustin-rodriguez-1a29b5218/" target="_blank" color="inherit">
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:aleexrodriguez93@gmail.com" color="inherit">
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};
