import React, { FunctionComponent } from 'react';
import ExperimentCard from '../components/ExperimentCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const HomePage: FunctionComponent = () => {
  return (
    <div>
        <Typography 
            variant="h1" 
            component="h1"
        >
            Christopher Bachicha
        </Typography>
        <Typography 
            variant="h4" 
            component="h2"
            marginTop={5}
            marginBottom={3}
        >
            Experiment Group
        </Typography>
        <Grid container spacing={5}>
            <ExperimentCard />
            <ExperimentCard />
            <ExperimentCard />
            <ExperimentCard />
        </Grid>
    </div>
  );
};

export default HomePage;
