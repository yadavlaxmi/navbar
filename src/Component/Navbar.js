import React, { useState } from 'react'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { marginLeft,AppBar, Grid, Typography,Toolbar,Tabs,Tab, Button,Box } from "@mui/material";
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
                    <Grid item xs={6}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={val} onChange={(e,val)=>setVal(val)}>
                            {links.map((link,index)=>(
                                <Tab key={index} label={link}/>
                            ))}

                        </Tabs>
                    </Grid>
                   <Grid item xs={1}/>
                   <Grid item xs={3}>
                    <Box display={'flex'}>
                        <Button sx={{marginLeft:"auto"}}variant='contained'>Login</Button>
                        <Button sx={{marginLeft:"1"}}variant='contained'>sign up</Button>

                    </Box>
                    </Grid>
                </Grid>
            </Toolbar>
               
        </AppBar>
        
    )
}
export default Navbar