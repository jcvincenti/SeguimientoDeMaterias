import React from 'react';

export default function Anio(anio, materias) {
    return(
        <Grid container direction="row" justify="center">
            <Grid container direction="row" xs={8} justify="flex-start">
                <Typography variant="h5">
                    {anio}
                </Typography>
            </Grid>
            <Grid container direction="column" xs={8}>
                
            </Grid>
        </Grid>
    );
}