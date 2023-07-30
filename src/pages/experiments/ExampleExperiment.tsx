import React, { FunctionComponent } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ExampleExperiment: FunctionComponent = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Example Experiment 2
            </Typography>
        </Container>
    );
};

export default ExampleExperiment;
