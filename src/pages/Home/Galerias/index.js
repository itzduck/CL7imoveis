import { Button, ButtonGroup, Grid } from '@material-ui/core'
import React from 'react';
import data from '../../../data/data';
import CardImages from './CardImages/';
import useStyles from './styles';


const Galerias = () => {
    const classes = useStyles();
    const properties = data.properties;
    return (
        <div className={classes.root}>
            <h1 className={classes.galeria}>GALERIAS</h1>
            <div className={classes.buttons}>
                {/* <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>IMOVEIS</Button>
                    <Button>CONDOMINIOS</Button>
                    <Button>ALUGUEL</Button>
                </ButtonGroup> */}
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button>IMOVEIS</Button>
                    <Button>CONDOMINIOS</Button>
                    <Button>ALUGUEL</Button>
                </ButtonGroup>
            </div>



            <div className={classes.lista}>

            </div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3}>
                        {properties.map((property) => (
                            <Grid key={property._id} item>
                                <CardImages key={property._id} property={property} className={classes.cardImage}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}

//export default function BasicButtonGroup();
export default Galerias;
