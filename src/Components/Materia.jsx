import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center'
    },
  }));

export default function Materia(nombre, requisitos, resumen) {
    const classes = useStyles();

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
                        Prerrequisitos: {requisitos.length === 0 ? 'Ninguno' : requisitos.join(', ')}
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