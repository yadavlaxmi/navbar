import React, { useState } from 'react'; 

import { List,Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const DrawerComp=()=>{
    const[open,setOpen]=useState(false)
    return(
        <>
        <Drawer open={true} onClose={()=>setOpen(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Products</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton>
            <MenuRoundedIcon/>
        </IconButton>
        </>

    )
}
export default DrawerComp;