import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import SchoolIcon from '@material-ui/icons/School';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    width: "100%",
    maxWidth: "100%"
  },
}));

export default function Home() {
  const classes = useStyles();

  const pasos = ["Selecciona tu universidad", "Selecciona tu carrera", "Comenza a trackear tu progreso !"]

  return (
    <Grid container>
        <CssBaseline />
        <AppBar position="relative" style={{background: 'linear-gradient(45deg, rgba(119,0,0,1) 0%, rgb(185,28,0) 100%)'}}>
            <Toolbar>
            <SchoolIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
                SSU | Sistema de Seguimiento Universitario
            </Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{margin: 0}}>
                Bienvenido a SSU
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{margin: 0}}>
                Sistema de Seguimiento Universitario
            </Typography>
            <Grid item style={{width: "fit-content", margin: "auto"}}>
                <Stepper orientation="vertical">
                    {pasos.map(step => {
                        return <Step active={true} style={{marginBottom: 8}}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    })}
                </Stepper>
            </Grid>
        </Container>
        <Grid container justify="center" alignItems="center">
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            ASD
                        </Typography>
                        <Typography color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Grid>
  );
}