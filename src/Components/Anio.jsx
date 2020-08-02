import React from 'react';
import Materia from './Materia';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
                key={materia.Nombre}
                nombre = {materia.Nombre} 
                requisitos = {materia.Prerrequisitos} 
                resumen = {materia.Resumen} 
                materiasAprobadas = {materiasAprobadas} 
                agregarMateria = {handleAgregarMateria} 
                eliminarMateria = {handleEliminarMateria}
            />
        ));
    }

    return(
        <Grid container direction="row" justify="flex-start">
            <Grid container direction="row" justify="flex-start">
                <Grid item xs={12}>
                    <Typography variant="h5">
                        {anio}
                    </Typography>
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