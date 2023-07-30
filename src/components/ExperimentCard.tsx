import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { 
                        variant: 'body3',
                    },
                    style: {
                        fontSize: 11,
                    }
                },
            ],
        },
    },
});

interface Experiment {
    title: string;
    description: string;
    route: string;
}

interface ExperimentCardProps {
    experiment: Experiment;
}

const ExperimentCard: FunctionComponent<ExperimentCardProps> = ({experiment}) => {
    let navigate = useNavigate();
    const setRoute = (route: string) => {
        navigate(route);
    }

    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper 
                    elevation={3}
                    onClick={() => setRoute(experiment.route)}
                >
                    <img
                        src="https://previews.123rf.com/images/vladwel/vladwel1708/vladwel170800063/84813318-video-chatting-online-vector-illustration-flat-cartoon-video-player-window-with-speaking-happy-girl.jpg"
                        alt="placeholder"
                        className="img"
                    />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            {experiment.title}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography variant="body3" component="p" marginLeft={0.5}>
                                5 hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            marginTop={2}
                        >
                            <Typography variant="body2" component="p">
                                {experiment.description}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};

export default ExperimentCard;
