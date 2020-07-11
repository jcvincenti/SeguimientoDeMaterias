import React, {useState} from 'react';
// import axios from 'axios';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Anio from './Anio';

export default function Home() {
    let data = {
        "Universidad": "Universidad Nacional de Quilmes",
        "Carrera": "Tecnicatura universitaria en programación informática",
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

    const [nombreUniversidad, setNombreUniversidad] = useState(data.Universidad);
    const [nombreCarrera, setNombreCarrera] = useState(data.Carrera);
    const [materias, setMaterias] = useState(data.Materias);

    // function getData() {
    //     axios.get('https://materiasunq.free.beeceptor.com/tpi')
    //         .then((response) => {
    //             setNombreUniversidad(response.data.Universidad);
    //             setNombreCarrera(response.data.Carrera);
    //             setMaterias(response.data.Materias);
    //         })
    // }

    // useEffect(() => {
    //     getData();
    // }, [])

    function renderMaterias() {
        return Object.entries(materias).map((anio) => (
            Anio(anio[0], anio[1])
        ));
    }

    return (
        <div>
            <Grid container direction="row" justify="center">
                <Grid container direction="row" xs={8} justify="flex-start">
                    <Typography variant="h5">
                        Establecimiento: {nombreUniversidad}
                    </Typography>
                </Grid>
                <Grid container direction="row" xs={8} justify="flex-start">
                    <Typography variant="h5">
                        Carrera: {nombreCarrera}
                    </Typography>
                </Grid>
                <Grid container direction="row" xs={8} justify="flex-start">
                    {renderMaterias()}
                </Grid>
            </Grid>
    </div>
    );
}