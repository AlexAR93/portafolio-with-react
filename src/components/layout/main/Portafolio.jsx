import React from 'react';
import './portafolio.css';
import PropTypes from 'prop-types';
import {Tabs,Tab,Box} from '@mui/material';
import getFirebaseData from '../../../helpers/getFirebaseData';
import Proyects from './Proyects';
import Tecnologies from './Tecnologies';
import Certificates from './Certificates';
import Works from './Works';
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
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Certificados" {...a11yProps(0)} />
          <Tab label="Proyectos" {...a11yProps(1)} />
          <Tab label="Trabajos" {...a11yProps(2)} />
          <Tab label="Tecnologias" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Certificates getFirebaseData={getFirebaseData}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Proyects getFirebaseData={getFirebaseData}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Works getFirebaseData={getFirebaseData}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Tecnologies getFirebaseData={getFirebaseData}/>
      </TabPanel>
    </Box>
  );
}