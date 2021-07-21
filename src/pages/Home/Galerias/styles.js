import { makeStyles } from "@material-ui/core/styles";
// import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
  galeria: {
    color: theme.palette.secondary.dark,
    flexGrow: 1,
    textAlign: "center",
    margin: "20px",
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),

    },
  },
  lista: {
    display: 'flex',
    padding: "47px",
    flexWrap: 'wrap',
  },
  cardImage: {

  }
  
}));
export default useStyles;