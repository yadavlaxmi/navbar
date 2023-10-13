import React, { useState } from 'react'; 

import { List,Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const DrawerComp=(links)=>{
    const[open,setOpen]=useState(false)
    return(
        <>
        <Drawer   open={open} onClose={()=>setOpen(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Products</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton sx={{marginLeft:"auto", color:"white"}}onClick={()=>setOpen(!open)}>
            <MenuRoundedIcon/>
        </IconButton>
        </>

    )
}
export default DrawerComp;