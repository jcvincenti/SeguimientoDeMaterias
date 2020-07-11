import React, {useState} from 'react';

export default function Materia(nombre, requisitos, resumen) {
    return(
        <Grid item direction="row">
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={nombre}
                    />
                    <Typography className={classes.secondaryHeading}>
                        Prerrequisitos: {requisitos}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        {resumen}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}