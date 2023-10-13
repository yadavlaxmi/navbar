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
                            {links.map((link,index)=>(
                                <Tab key={index} label={link}/>
                            ))}

                        </Tabs>
                    </Grid>

                </Grid>
            </Toolbar>
               
        </AppBar>
        
    )
}
export default Navbar