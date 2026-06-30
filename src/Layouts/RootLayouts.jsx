import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Sidebar from '../Componets/Sidebar';
const RootLayouts = () => {
  return (
    <div>
      {/* <Outlet/> */}
        <Grid container spacing={2}>
        <Grid size={2}>
         <Sidebar/>
        </Grid>
      
        <Grid size={10}>
         <Outlet/>
        </Grid>
      
      
    
      </Grid>
    </div>
  )
}

export default RootLayouts