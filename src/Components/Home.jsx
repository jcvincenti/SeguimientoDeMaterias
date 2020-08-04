import React, {useState} from 'react';
// import axios from 'axios';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Anio from './Anio';

export default function Home() {
    let data = {
        "Universidad": "Universidad Nacional de Quilmes",
        "Carrera": "Tecnicatura Universitaria en Programación Informática",
        "Materias": {
            "Primer año": [
                {
                    "Nombre": "Lectura y escritura académica",
                    "Prerrequisitos": [],
                    "Resumen": "Definicion de enciclopedia. Reformulación (léxica y sintáctica).Consistencia en referencia, género, número y tiempos verbales. Nominalización. Notas periodísticas sobre temas disciplinares. Puntuación y subordinación. Unidades escritas: sección, párrafo, oración. Planteo de objetivos, preguntas, hipótesis y estructura."
                },
                {
                    "Nombre": "Matemática",
                    "Prerrequisitos": [],
                    "Resumen": "Algún resumen de matemática"
                },
                {
                    "Nombre": "Elementos de programación y lógica",
                    "Prerrequisitos": [],
                    "Resumen": "Algún resumen de elementos de programación y lógica"
                },
                {
                    "Nombre": "Matemática 1",
                    "Prerrequisitos": ["Matemática", "Elementos de programación y lógica"],
                    "Resumen": "Algún resumen de matemática 1"
                },
                {
                    "Nombre": "Introducción a la programación",
                    "Prerrequisitos": ["Elementos de programación y lógica"],
                    "Resumen": "Algún resumen de introducción a la programación"
                },
                {
                    "Nombre": "Organización de las computadoras",
                    "Prerrequisitos": ["Elementos de programación y lógica"],
                    "Resumen": "Algún resumen de organización de las computadoras"
                }
            ],
            "Segundo año": [
                {
                    "Nombre": "Bases de datos",
                    "Prerrequisitos": [],
                    "Resumen": "Algún resumen de bases de datos"
                },
                {
                    "Nombre": "Programación con objetos 1",
                    "Prerrequisitos": ["Introducción a la programación"],
                    "Resumen": "Algún resumen de Programación con objetos 1"
                },
                {
                    "Nombre": "Estructuras de datos",
                    "Prerrequisitos": ["Introducción a la programación"],
                    "Resumen": "Algún resumen de estructuras de datos"
                },
                {
                    "Nombre": "Matemática 2",
                    "Prerrequisitos": ["Matemática 1"],
                    "Resumen": "Algún resumen de matemática 2"
                },
                {
                    "Nombre": "Programación con objetos 2",
                    "Prerrequisitos": ["Programación con objetos 1"],
                    "Resumen": "Algún resumen de Programación con objetos 2"
                },
                {
                    "Nombre": "Redes de computadoras",
                    "Prerrequisitos": ["Organización de las computadoras"],
                    "Resumen": "Algún resumen de Redes de computadoras"
                },
                {
                    "Nombre": "Sistemas operativos",
                    "Prerrequisitos": ["Organización de las computadoras", "Introducción a la programación"],
                    "Resumen": "Algún resumen de Sistemas operativos"
                }
            ]
        }
    }

    const nombreUniversidad = data.Universidad;
    const nombreCarrera = data.Carrera;
    const materias = data.Materias;
    const [materiasAprobadas, setMateriasAprobadas] = useState([]);

    function eliminarMateria(materia) {
        setMateriasAprobadas(materiasAprobadas.filter(materiaAprobada => materiaAprobada !== materia));
    }

    function agregarMateria(materia) {
        setMateriasAprobadas(materiasAprobadas.concat([materia]));
    }

    // function getData() {
    //     axios.get('https://materiasunq.free.beeceptor.com/tpi')
    //         .then((response) => {
    //             setNombreUniversidad(response.data.Universidad);
    //             setNombreCarrera(response.data.Carrera);
    //             setMaterias(response.data.Materias);
    //         })
    // }

    function renderMaterias() {
        return Object.entries(materias).map((anio) => (
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
                            Establecimiento: {nombreUniversidad}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center">
                    <Grid item xs={8}>
                        <Typography variant="h5">
                            Carrera: {nombreCarrera}
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