import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, Box } from '@mui/material'
import { getFirebaseData } from '../../helpers';
import { useMediaQuery, useTheme } from '@mui/material';


export const LatestProjects=(props)=>{
    const [data, setData] = useState([])
    let items=[];
    useEffect(() => {
      getFirebaseData('proyects','createAt')
          .then(data=> {
              setData(data)
          }
        )
    }, []);
    for (let i=0; i<5; i++){
        data.length>0&&console.log(data[i].id)
        data.length>0&&items.push({name:data[i].name,description:data[i].description,image:data[i].image,urlPage:data[i].urlPage,urlRepository:data[i].urlRepository})
    }
    return (
        <Carousel sx={{display:'flex',flexDirection:'column',gap:2}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
function Item(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <h2>Últimos proyectos</h2>
            <Box
                variant="div"
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    width: '100%',
                    gap: '10px',
                    background: '#fff',
                    borderRadius: '33px',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                <Paper
                    sx={{
                        width: isMobile ? '95%' : '60%',
                        // maxWidth: isMobile ? '90%' : '1300px',
                        height: '300px',
                        backgroundImage: `url("${props.item.image}")`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        borderRadius: '30px',
                        m: 2,
                    }}
                ></Paper>

                <Box variant="div" sx={{ textAlign: 'center', mr: 2, width: isMobile ? '100%' : '40%',}}>
                    <Typography variant="h3" sx={{ color: '#000', textTransform: 'uppercase', fontSize: '2.1rem' }}>
                        {props.item.name}
                    </Typography>
                    <Typography variant="p" sx={{ color: '#000' }}>
                        {props.item.description}
                    </Typography>

                    <Box variant="div">
                        <Button
                            variant="contained"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.item.urlPage}
                            sx={{ mx: 2, my: 1 }}
                        >
                            Ver página
                        </Button>
                        <Button
                            variant="contained"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.item.urlRepository}
                            sx={{ mx: 2, my: 1 }}
                        >
                            Ver Repositorio
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
