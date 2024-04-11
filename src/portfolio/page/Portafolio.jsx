import React from 'react';
import './portafolio.css';
import PropTypes from 'prop-types';
import {Tabs,Tab,Box} from '@mui/material';
import { useNavigate } from "react-router-dom"
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export function Portafolio() {

  const navigate=useNavigate()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/portafolio/${event.target.innerText.toLowerCase()}`,{
      replace:false
    })
  };
  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label='certificados' {...a11yProps(0)}/>
          <Tab label='proyectos' {...a11yProps(1)} />
          {/* <Tab label="Trabajos" {...a11yProps(2)} /> */}
          <Tab label="tecnologias" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* <TabPanel value={value} index={2}>
        <Works getFirebaseData={getFirebaseData}/>
      </TabPanel> */}
      {/* <TabPanel value={value} index={2}>
        <Tecnologies/>
      </TabPanel> */}
    </Box>
  );
}