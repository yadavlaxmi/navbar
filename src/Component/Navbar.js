import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@mui/material';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';

const Navbar = ({ links }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [val, setVal] = useState(0);

  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.9024390243902439) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        {isMatch ? (
            <>
            <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
          <DrawerComp links={links}/>
          </>
        ) : (
          <Grid sx={{ placeItems: 'center' }} container>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={val}
                onChange={(e, val) => setVal(val)}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                )
            )}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display="flex">
                <Button
                  sx={{ marginLeft: 'auto', background: 'rgba(180,58,58,1)' }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: 'rgba(180,58,58,1)' }}
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
