import React, { FunctionComponent } from 'react';
import ExperimentCard from '../components/ExperimentCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const experiments = [
  {
    title: 'Example Experiment',
    description: 'This is an example experiment.',
    route: '/example',
  },
  {
    title: 'Example Experiment 2',
    description: 'This is the second example experiment.',
    route: '/example',
  },
];

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
          {experiments.map((experiment) => (
            <ExperimentCard experiment={experiment} />
          ))}
        </Grid>
    </div>
  );
};

export default HomePage;
