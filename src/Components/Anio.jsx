import React from 'react';
import Materia from './Materia';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Anio(anio, materias) {

    function renderMaterias(materias) {
        return materias.map((materia) => (
            Materia(materia.Nombre, materia.Prerrequisitos, materia.Resumen)
        ));
    }

    return(
        <Grid container direction="row" justify="center">
            <Grid container direction="row" xs={12} justify="flex-start">
                <Typography variant="h5">
                    {anio}
                </Typography>
            </Grid>
            <Grid container direction="column" xs={12}>
                {renderMaterias(materias)}
            </Grid>
        </Grid>
    );
}