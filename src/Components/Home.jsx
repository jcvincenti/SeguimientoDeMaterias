import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Anio from './Anio';

export default function Home() {

    const nombreUniversidad = useRef('');
    const nombreCarrera = useRef('');
    const materias = useRef('');
    const [render, setRender] = useState(false);
    const [materiasAprobadas, setMateriasAprobadas] = useState([]);

    function eliminarMateria(materia) {
        setMateriasAprobadas(materiasAprobadas.filter(materiaAprobada => materiaAprobada !== materia));
    }

    function agregarMateria(materia) {
        setMateriasAprobadas(materiasAprobadas.concat([materia]));
    }

    useEffect(() => {
        const getData = () => {
            if (!render) {
                axios.get('https://materiasunq3.free.beeceptor.com/tpi')
                    .then((response) => {
                        nombreUniversidad.current = response.data.Universidad;
                        nombreCarrera.current = response.data.Carrera;
                        materias.current = response.data.Materias;
                        setRender(true);
                    })
            }
        }
        getData();
    }, [render])

    function renderMaterias() {
        return Object.entries(materias.current).map((anio) => (
            <Anio 
                key={anio[0]}
                anio ={anio[0]}
                materias = {anio[1]}
                materiasAprobadas = {materiasAprobadas}
                agregarMateria = {agregarMateria}
                eliminarMateria = {eliminarMateria}
            />
        ));
    }

    return (
        <div>
            <Grid container direction="row" justify="center">
                <Grid container direction="row"  justify="center">
                    <Grid item xs={8}>
                        <Typography variant="h5">
                            Establecimiento: {nombreUniversidad.current}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center">
                    <Grid item xs={8}>
                        <Typography variant="h5">
                            Carrera: {nombreCarrera.current}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center">
                    <Grid item xs={8}>
                        {renderMaterias()}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}