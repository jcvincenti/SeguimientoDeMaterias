import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

export default function Materia({nombre, requisitos, resumen, materiasAprobadas, agregarMateria, eliminarMateria}) {
    const classes = useStyles();
    const [aprobada, setAprobada] = useState(false);

    useEffect(() => {
        const verificarCumpleRequisitos = () => {
            let cumpleRequisitos = requisitos.length === 0 || requisitos.every(materia => materiasAprobadas.includes(materia));
            setAprobada(cumpleRequisitos);
        }
        verificarCumpleRequisitos();
    }, [materiasAprobadas, requisitos])

    function handleClick(event) {
        event.stopPropagation();
        event.target.checked ? agregarMateriaAprobada() : eliminarMateriaAprobada();
    }

    function eliminarMateriaAprobada() {
        eliminarMateria(nombre);
    }

    function agregarMateriaAprobada() {
        agregarMateria(nombre);
    }

    function getDetalleTipado(detalle) {
        return detalle.startsWith('http') 
            ? <a href={detalle} target="_blank" rel="noopener noreferrer">{detalle}</a>
            : detalle
    }

    function renderResumen(resumen) {
        return <Grid container direction="column" alignItems="flex-start">
            {Object.entries(resumen).map((detalle) => (
                <Typography color="textSecondary" align="left" key={detalle[0]}>
                    <b>{detalle[0]}:</b> {getDetalleTipado(detalle[1])}
                </Typography>
            ))}
        </Grid>
    }

    return(
        <Grid item xs={12}>
            <Accordion disabled={!aprobada} square="true">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => handleClick(event)}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={nombre}
                    />
                    <Typography className={classes.secondaryHeading}>
                        Prerrequisitos: {requisitos.length === 0 ? 'Ninguno' : requisitos.join(', ')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {renderResumen(resumen)}
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}