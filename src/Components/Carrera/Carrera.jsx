import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Anio from './Anio';
import NavigationBar from '../NavigationBar';

export default function Carrera() {

    const nombreUniversidad = useRef('');
    const nombreCarrera = useRef('');
    const anios = useRef('');
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
                axios.get('http://localhost:3001/api/carreras/unq-tpi')
                    .then((response) => {
                        nombreUniversidad.current = response.data.universidad;
                        nombreCarrera.current = response.data.carrera;
                        anios.current = response.data.anios;
                        setRender(true);
                    })
            }
        }
        getData();
    }, [render])

    function renderAnios() {
        //TODO: Eliminar el object entries
        return Object.entries(anios.current).map((anio) => (
            <Anio 
                key={anio[1].anio}
                anio ={anio[1].anio}
                materias = {anio[1].materias}
                materiasAprobadas = {materiasAprobadas}
                agregarMateria = {agregarMateria}
                eliminarMateria = {eliminarMateria}
            />
        ));
    }

    const content = () => {
        return <Grid container direction="row" justify="center">
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
                    {renderAnios()}
                </Grid>
            </Grid>
        </Grid>
    } 

    return (
        <div>
            <NavigationBar
                content={content()}
            />
        </div>
    );
}