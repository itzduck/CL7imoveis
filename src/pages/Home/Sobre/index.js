import {Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Sobre = () => {
const classes = useStyles();    
    return(

        <Container id='sobre' className={classes.root}> 
            <h1 className={classes.home}>HOME</h1>
          <div className={classes.boxShadow}>

            <div className={classes.partOne}>

            </div>
            <div className={classes.partTwo}>
                <h1> Sobre nóss</h1>
                <h4>lorem ipsum dolor sit amet consectetur adipiscing elit sagittis velit torquent 
                    class ornare lobortis litora a duis lectus congue porttitor cubilia turpis 
                    inceptos lacinia ex suspendisse maximus tortor enim consequat feugiat pharetra 
                    penatibus curae tristique ligula eleifend at auctor tempus</h4>
            </div>
         </div>  
        </Container>
        
    )
}

export default Sobre;