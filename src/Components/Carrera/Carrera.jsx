import React, {useState, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Anio from './Anio';
import NavigationBar from '../NavigationBar';
import Alert from '@material-ui/lab/Alert';

export default function Carrera() {
    const location = useLocation();
    const nombreUniversidad = useRef(null);
    const nombreCarrera = useRef(null);
    const anios = useRef(null);
    const [render, setRender] = useState(false);
    const [materiasAprobadas, setMateriasAprobadas] = useState([]);

    function eliminarMateria(materia) {
        setMateriasAprobadas(materiasAprobadas.filter(materiaAprobada => materiaAprobada !== materia));
    }

    function agregarMateria(materia) {
        setMateriasAprobadas(materiasAprobadas.concat([materia]));
    }

    useEffect(() => {
        console.log(location.state.codigoCarrera);
        const getData = async () => {
            if (!render) {
                let response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/carreras/${location.state.codigoCarrera}`)
                if (response.data) {
                    nombreUniversidad.current = response.data.universidad;
                    nombreCarrera.current = response.data.carrera;
                    anios.current = response.data.anios;
                    setRender(true);
                }
            }
        }
        getData();
    }, [render, location])

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

    const renderContent = () => {
        return <>
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
        </>
    }

    const renderEmtpy = () => {
        return <Alert severity="info">Lo siento! No disponemos de la lista de materias aún</Alert>
    }

    const content = () => {
        return <Grid container direction="row" justify="center">
            {nombreCarrera.current ? renderContent() : renderEmtpy()}
        </Grid>
    }

    const pageTitle = () => {
        return <>
            <Typography variant="h6" noWrap>
                Seguimiento de materias
            </Typography>
        </>
    }

    return (
        <div>
            <NavigationBar
                content={content()}
                pageTitle={pageTitle()}
            />
        </div>
    );
}