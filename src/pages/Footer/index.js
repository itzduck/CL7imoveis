import React from 'react';
import useStyles from './style';
import logo from '../../imagem/imgs.jpg'


const Footer = () =>{
    const classes = useStyles();
    return(
        <div>
            <h1 className={classes.contatos}>CONTATOS</h1>
            
            <div className={classes.footer}>
                <div className={classes.divLogo}>
                    <img src={logo} alt="Logo RDM" width="150" />

                </div>
                <div>
                    Email <br/>
                    Telefone <br/>
                    Endereço <br/>
                </div>
                <div>
                    Face <br/>
                    Insta <br/>
                    Whatsapp <br/> 
                </div>
            </div>
        </div>
    );
    }   
    
export default Footer



