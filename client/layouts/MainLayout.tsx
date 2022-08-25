import React from "react";
import Navbar from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

const MainLayout: React.FC = ({children}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid item xs={2.5} style={{backgroundColor: 'white'}}>
          <Navbar/>
        </Grid>
        <Grid item xs={9.5} style={{background:
            'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.1) 900px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 400px)',}}>
          <Container maxWidth={'xl'}>
          {children}
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;