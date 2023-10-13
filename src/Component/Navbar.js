import React, { useState } from 'react'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AppBar, Grid, Typography,Toolbar,Tabs,Tab } from "@mui/material";
import { ShoppingCartCheckout } from "@mui/icons-material";
const Navbar=({links})=>{
    const[val,setVal]=useState()
    return(
    
        <AppBar>
            <Toolbar>
                <Grid container>
                    <Grid item xs={2}>
                        <Typography><ShoppingCartCheckout/></Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={val} onChange={(e,val)=>setVal(val)}>
                            <Tab label="product"></Tab>
                            <Tab label="overview"></Tab>setVal
                            <Tab label="pricing"></Tab>

                        </Tabs>
                    </Grid>

                </Grid>
            </Toolbar>
               
        </AppBar>
        
    )
}
export default Navbar