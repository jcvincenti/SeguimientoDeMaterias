## Seguimiento de materias
#### Aplicación para realizar el seguimiento de las materias aprobadas/desaprobadas con desbloqueo de correlativas
#### y breve resumen de la materia

## Payload
#### Mock API `https://materiasunq2.free.beeceptor.com/tpi`
#### Actualmente utilizando el siguiente payload de prueba
```javascript
{
        "Universidad": "Universidad Nacional de Quilmes",
        "Carrera": "Tecnicatura Universitaria en Programación Informática",
        "Anios": [
            {
                "Anio": "Primer Año",
                "Materias": [
                    {
                        "Nombre": "Lectura y escritura académica",
                        "Prerrequisitos": [],
                        "Resumen": {
                            "Objetivos": "La materia tiene por objetivo que l@s estudiantes amplíen y desarrollen habilidades generales de comunicación científica y académica",
                            "Modos de Cursada": "Cuatrimestral Presencial",
                            "Horas Semanales": "5 horas",
                            "Demanda de tiempo en casa semanal": "5 horas",
                            "Sitio Web":"http://leacyt.web.unq.edu.ar/",
                            "Programa de la materia":"Aún no disponible"
                         }
                    },
                    ...
                    {
                        "Nombre": "Organización de las computadoras",
                        "Prerrequisitos": ["Elementos de programación y lógica"],
                        "Resumen": {
                            "Objetivos": "La materia tiene por objetivo que l@s estudiantes comprendan, manejen y se familiaricen con conceptos fundamentales de la ejecución de programas y el funcionamiento de la computadora, en los distintos niveles de abstracción. Además qué logren identificar que componentes son necesarios para que una computadora funcione: Unidad de Control, Unidad Aritmético-Lógica, Registros, Memoria Principal, subsistema de interconexión",
                            "Modos de Cursada": "Cuatrimestral Presencial",
                            "Horas Semanales": "6 horas",
                            "Demanda de tiempo en casa semanal": "6 horas",
                            "Sitio Web":"http://orga.blog.unq.edu.ar/",
                            "Programa de la materia":"http://cpi.blog.unq.edu.ar/wp-content/uploads/sites/14/2020/08/2019-Sistemas-Informaticos_Organizacion_de_Computadoras-CD.pdf"
                        }
                    }
                ]
            },
            {
                "Anio": "Segundo Año",
                "Materias": [
                    {
                        "Nombre": "Bases de datos",
                        "Prerrequisitos": [],
                        "Resumen": {
                            "Objetivos": "La materia tiene por objetivo que l@s estudiantes entiendan qué es un modelo de datos y  diferencien entre pensar a nivel esquema y pensar a nivel instancia.A demás puedan armar un modelo de entidad-relación para un dominio no trivial.",
                            "Modos de Cursada": "Cuatrimestral Presencial",
                            "Horas Semanales": "6 horas",
                            "Demanda de tiempo en casa semanal": "6 horas",
                            "Sitio Web":"Aún no disponible",
                            "Programa de la materia":"http://cpi.blog.unq.edu.ar/wp-content/uploads/sites/14/2020/08/2019-Programacion_Bases_de_Datos-CD.pdf"
                        }
                    },
                    ...
                    {
                        "Nombre": "Sistemas operativos",
                        "Prerrequisitos": ["Organización de las computadoras", "Introducción a la programación"],
                        "Resumen": {
                            "Objetivos": "La materia tiene por objetivo que l@s estudiantes conozcan las funciones de un sistema operativo, las características de los recursos que administra y las diferentes políticas de administración. Conozcan los conceptos de proceso y thread, la necesidad de planificar y controlar su ejecución, y tenga nociones de políticas de planificación y además que se familiaricen con los entornos operativos del estilo Unix, el uso de interfaz de línea de comandos, y adquiera conocimientos sobre shell scripting.",
                            "Modos de Cursada": "Cuatrimestral Presencial",
                            "Horas Semanales": "6 horas",
                            "Demanda de tiempo en casa semanal": "6 horas",
                            "Sitio Web":"Aún no disponible",
                            "Programa de la materia":"http://cpi.blog.unq.edu.ar/wp-content/uploads/sites/14/2020/08/2019-Sistemas-Informaticos_Sistemas_Operativos-CD.pdf"
                        }
                    }
                ]
            }
        ]
    }
```
## App
![App](https://media.giphy.com/media/RfT8hJa3kAiLNPex84/giphy.gif)
