import React, {useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center'
    },
  }));

export default function Home() {
    const classes = useStyles();
    const [materiasAprobadas, setMateriasAprobadas] = useState([]);

    function agregarMateria(materia) {
        materiasAprobadas.push(materia)
    }

    function quitarMateria(materia) {
        let index = getIndexOfMateria(materia);
        if (index !== -1) {
            materiasAprobadas.splice(index, 1);
        }
    }

    function getIndexOfMateria(materia) {
        return materiasAprobadas.indexOf(materia)
    }

    function handleCheckboxChange(event) {
        event.stopPropagation();
        if (event.target.checked) {
            agregarMateria("Matematica");
        } else {
            quitarMateria("Matematica");
        }
    }

    function cumpleRequisitos(materia) {
        return getIndexOfMateria(materia) !== -1;
    }

    return (
        <div>
            <Grid container direction="row" justify="center">
                <Grid container direction="row" xs={8} justify="flex-start">
                    <Typography variant="h5">
                        Primer Cuatrimestre
                    </Typography>
                </Grid>
                <Grid container direction="column" xs={8}>
                    <Grid item direction="row">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                            >
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => handleCheckboxChange(event)}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Lectura y escritura académica"
                                />
                                <Typography className={classes.secondaryHeading}>
                                    Prerrequisitos: Ninguno
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Nemo aliquid porro blanditiis sit nam eaque iste maxime 
                                    voluptas explicabo modi quidem debitis voluptatibus ea quia 
                                    veritatis, impedit expedita totam. Omnis?
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item direction="row">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                            >
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => handleCheckboxChange(event)}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Matemática"
                                />
                                <Typography className={classes.secondaryHeading}>
                                    Prerrequisitos: Ninguno
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Nemo aliquid porro blanditiis sit nam eaque iste maxime 
                                    voluptas explicabo modi quidem debitis voluptatibus ea quia 
                                    veritatis, impedit expedita totam. Omnis?
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item direction="row">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                            >
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => event.stopPropagation()}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Elementos de programación y lógica"
                                />
                                <Typography className={classes.secondaryHeading}>
                                    Prerrequisitos: Ninguno
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Nemo aliquid porro blanditiis sit nam eaque iste maxime 
                                    voluptas explicabo modi quidem debitis voluptatibus ea quia 
                                    veritatis, impedit expedita totam. Omnis?
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
                <Grid container direction="row" xs={8} justify="flex-start">
                    <Typography variant="h5">
                        Segundo Cuatrimestre
                    </Typography>
                </Grid>
                <Grid container direction="column" xs={8}>
                    <Grid item direction="row">
                        <Accordion disabled={!cumpleRequisitos("Matematica")}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                            >
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => event.stopPropagation()}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Matemática I"
                                />
                                <Typography className={classes.secondaryHeading}>
                                    Prerrequisitos: Elementos de Lógica y Programación / Matemática
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Nemo aliquid porro blanditiis sit nam eaque iste maxime 
                                    voluptas explicabo modi quidem debitis voluptatibus ea quia 
                                    veritatis, impedit expedita totam. Omnis?
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item direction="row">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                            >
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => event.stopPropagation()}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Introducción a la Programación"
                                />
                                <Typography className={classes.secondaryHeading}>
                                    Prerrequisitos: Elementos de programación y lógica
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Nemo aliquid porro blanditiis sit nam eaque iste maxime 
                                    voluptas explicabo modi quidem debitis voluptatibus ea quia 
                                    veritatis, impedit expedita totam. Omnis?
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item direction="row">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                            >
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => event.stopPropagation()}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Organización de Computadoras"
                                />
                                <Typography className={classes.secondaryHeading}>
                                    Prerrequisitos: Elementos de programación y lógica
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Nemo aliquid porro blanditiis sit nam eaque iste maxime 
                                    voluptas explicabo modi quidem debitis voluptatibus ea quia 
                                    veritatis, impedit expedita totam. Omnis?
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Grid>
    </div>
    );
}