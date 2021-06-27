import { makeStyles } from "@material-ui/core/styles";
// import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px',
        boxShadow: '5px 5px 10px #0000009e',
        borderRadius: '5px',
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flex: '1 0 auto',
        margin: theme.spacing(1),
      },
      image: {
        
      },
      icones:{
          display: 'flex',
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: "70px",
          paddingRight: "70px",
      }

}

));



export default useStyles;