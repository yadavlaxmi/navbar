import React, { useState } from 'react'; 
import DrawerComp from './DrawerComp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useMediaQuery,placeItems, marginLeft,AppBar, Grid, Typography,Toolbar,Tabs,Tab, Button,Box } from "@mui/material";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { useTheme } from '@emotion/react';
const Navbar=({links})=>{
    const theme=useTheme();
    console.log(theme)

    const[val,setVal]=useState()
    return(
    
        <AppBar sx={{backgroundImage:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.9024390243902439) 35%, rgba(0,212,255,1) 100%);"}}>
            <Toolbar>
                <Grid sx={{placeItems:"center"}} container>
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
                        <Button sx={{marginLeft:"auto",background:"rgba(180,58,58,1)"}}variant='contained'>Login</Button>
                        <Button sx={{marginLeft:1,background:"rgba(180,58,58,1)"}}variant='contained'>sign up</Button>

                    </Box>
                    </Grid>
                </Grid>
                <DrawerComp/>
            </Toolbar>
               
        </AppBar>
        
    )
}
export default Navbar