import React, { useEffect, useState } from 'react';
import {getFirestore,collection,getDocs, query, orderBy} from 'firebase/firestore';
import './portafolio.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
  const [data, setData] = useState([])
  useEffect(() => {
    const querydb=getFirestore();
    const queryCollection=query(collection(querydb,'proyects'))
    getDocs(query(queryCollection,orderBy('order','asc')))
    .then(data=>setData(data.docs.map(proyect=>({id:proyect.id,...proyect.data()}))))
  }, [])
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Proyectos" {...a11yProps(0)} />
          <Tab label="Tecnologias" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <section className='page' data-aos="zoom-in">
       <h1 className='heading'>Mis proyectos</h1>
       <div className="proyects">
         {
           data.length>0?(
             data.map(proyect=>((
               <article className='proyects__card' key={proyect.id}>
                   <img src={proyect.image} alt={`proyecto ${proyect.name}`}/>
                   <div>
                   <h2>{proyect.name}</h2>
                   <h3>{proyect.tecnologies.join(' ')}</h3>
                   <p>{proyect.description}</p>
                   <div className="link">
                     <a href={proyect.urlPage} target='_blank'>Page</a>
                     <a href={proyect.urlRepository} target='_blank'>Repo</a>
                   </div>
                   </div>
               </article>
               )
             ))
           ):<div className='proyects__card'>
             <h2>Cargando...</h2>
           </div>
         }
       </div>
     </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <section className='page' data-aos="zoom-in">
          <h2>Tecnologias</h2>
          <p>En producción...</p>
        </section>
      </TabPanel>
    </Box>
  );
}


// import React, { useEffect, useState } from 'react';
// import {getFirestore,collection,getDocs, query, orderBy} from 'firebase/firestore';
// import './portafolio.css';
// const Portafolio = () => {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     const querydb=getFirestore();
//     const queryCollection=query(collection(querydb,'proyects'))
//     getDocs(query(queryCollection,orderBy('order','asc')))
//     .then(data=>setData(data.docs.map(proyect=>({id:proyect.id,...proyect.data()}))))
//   }, [])

//   return (
//     <section className='page' data-aos="zoom-in">
//       <h1 className='heading'>Mis proyectos</h1>
//       <div className="proyects">
//         {
//           data.length>0?(
//             data.map(proyect=>((
//               <article className='proyects__card' key={proyect.id}>
//                   <img src={proyect.image} alt={`proyecto ${proyect.name}`}/>
//                   <div>
//                   <h2>{proyect.name}</h2>
//                   <h3>{proyect.tecnologies.join(' ')}</h3>
//                   <p>{proyect.description}</p>
//                   <div className="link">
//                     <a href={proyect.urlPage} target='_blank'>Page</a>
//                     <a href={proyect.urlRepository} target='_blank'>Repo</a>
//                   </div>
//                   </div>
//               </article>
//               )
//             ))
//           ):<div className='proyects__card'>
//             <h2>Cargando...</h2>
//           </div>
//         }
//       </div>
//     </section>
//   )
// }

// export default Portafolio