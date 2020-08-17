## Seguimiento de materias
#### Aplicación para realizar el seguimiento de las materias aprobadas/desaprobadas con desbloqueo de correlativas
#### y breve resumen de la materia

## Payload
#### Mock API `https://materiasunq.free.beeceptor.com/tpi`
#### Actualmente utilizando el siguiente payload de prueba
```javascript
{
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
                ....
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
                ....
            ]
        }
    }
```
## App
![App](https://media.giphy.com/media/RfT8hJa3kAiLNPex84/giphy.gif)
