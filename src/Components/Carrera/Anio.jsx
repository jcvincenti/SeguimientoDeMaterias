import React from 'react';
import Materia from './Materia';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';

export default function Anio({anio, materias, materiasAprobadas, agregarMateria, eliminarMateria}) {

    function handleAgregarMateria(nombreMateria) {
        agregarMateria(nombreMateria);
    }

    function handleEliminarMateria(nombreMateria) {
        eliminarMateria(nombreMateria);
    }

    function renderMaterias(materias) {
        return materias.map((materia) => (
            <Materia 
                key={materia.nombre}
                nombre = {materia.nombre} 
                requisitos = {materia.prerrequisitos} 
                resumen = {materia.resumen} 
                materiasAprobadas = {materiasAprobadas} 
                agregarMateria = {handleAgregarMateria} 
                eliminarMateria = {handleEliminarMateria}
            />
        ));
    }

    return(
        <Grid container direction="row" justify="flex-start" style={{ padding: 10 }}>
            <Grid container direction="row" justify="center">
                <Grid item xs={12}>
                    <Accordion expanded="false" square="true">
                        <AccordionSummary>
                            <Typography variant="h5" style={{margin: "auto"}}>{anio}</Typography>
                        </AccordionSummary>
                    </Accordion>
                </Grid>
            </Grid>
            <Grid container direction="column">
                <Grid container direction="row">
                    {renderMaterias(materias)}
                </Grid>
            </Grid>
        </Grid>
    );
}