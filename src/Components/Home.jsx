import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SchoolIcon from '@material-ui/icons/School';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NavigationBar from './NavigationBar';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

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
    const [universidad, setUniversidad] = useState(null);
    const [carrera, setCarrera] = useState(null);
    const [isCarreraDisabled, setIsCarreraDisabled] = useState(true);
    const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(false);
    const history = useHistory();

    const pasos = [
        "Selecciona tu universidad",
        "Selecciona tu carrera",
        "Comenza a trackear tu progreso !"
        ];
    
    useEffect(() => {
        setIsCarreraDisabled(universidad === null);
        setIsSearchButtonDisabled(carrera === null);
    }, [universidad, carrera])
    
    const pageTitle = () => {
        return <>
            <SchoolIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
                SSU | Sistema de Seguimiento Universitario
            </Typography>
        </>
    }

    function goToCarrera() {
        history.push('/carrera');
    }

    const universidades = [
        'Universidad Nacional de Quilmes',
        'Universidad de Buenos Aires'
    ];
    const unqCarreras = [
        'Tecnicatura en Programación Informática',
        'Licenciatura en Informática',
        'Ingeniería en Automatización y Control Industrial',
        'Bioinformática'
    ]

    const searchBox = (searchBoxOptions, searchBoxLabel, setCallback, isDisabled = false) => {
        return <>
            <Autocomplete
                id="disabled-options-demo"
                onChange={(event, newValue) => {
                    setCallback(newValue);
                }}
                disabled={isDisabled}
                options={searchBoxOptions}
                getOptionDisabled={(option) => option === 'Universidad de Buenos Aires'}
                style={{ width: 300 , marginTop: 10}}
                renderInput={(params) => (
                    <TextField {...params} label={searchBoxLabel} variant="outlined" />
                )}
            />
        </>
    }

    const content = () => {
        return <Grid container>
            <CssBaseline />
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
                <Grid item style={{marginTop: 15, marginBottom: 15}}>
                    <Card>
                        <CardContent>
                            {searchBox(universidades, 'Seleccioná tu universidad', setUniversidad)}
                            {searchBox(unqCarreras, 'Seleccioná tu carrera', setCarrera, isCarreraDisabled)}
                            <Button 
                                variant="contained" 
                                color="primary" 
                                style={{marginTop: 10}} 
                                disabled={isSearchButtonDisabled}
                                onClick={goToCarrera}
                            >
                                Buscar
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    };

    return (
        <div>
            <NavigationBar
                content={content()}
                pageTitle={pageTitle()}
            />
        </div>
    );
}