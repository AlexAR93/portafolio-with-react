
import { Box } from '@mui/material';
import './loading.css'; 

export const Loading=()=>{
  return (
    <Box className="loading-container" sx={{height:'100vh'}}>
      <div className="loader"></div>
    </Box>
  );
}
