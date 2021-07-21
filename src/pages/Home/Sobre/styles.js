import { makeStyles } from "@material-ui/core/styles";
import imovelSobre from "../../../imagem/asd.jpeg";

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: '10px',
      
    },
    home: {
        color: theme.palette.secondary.dark,
        flexGrow: 1,
        textAlign: "center",
        margin: "1px",
    },

    partOne: {
      backgroundImage: "url("+ imovelSobre + ")",
      background: "center",
      minHeight: '300px',
      minWidth: '300px',
      backgroundRepeat: "no-repeat",
      position: "relative",
      backgroundSize: "cover",
      webkitborderRadius: '5px',
      mozborderRadius: '5px',
      borderRadius: '5px 0px 0px 5px',
      border: 'none',
      [theme.breakpoints.down("sm")]: {
        //Só afeta o mobile.
        borderRadius: '5px',
        
        
      },
      
    },
    partTwo: {
      
    },
    boxShadow: {
      //afeta só o componente que recebe.
      boxShadow: '5px 5px 10px #0000009e',
      webkitborderRadius: '5px',
      mozborderRadius: '5px',
      borderRadius: '5px',
      border: 'none',
      display: "flex",
      "& >  div": {
        //Aqui afeta todas as div's filhas direta.
        flex: 1,
        margin: "0px",
        textAlign: "center",
        fontSize: "1.5em",
        
      },
      [theme.breakpoints.down("sm")]: {
        //Só afeta o mobile.
        flexDirection: "column",
        backgroundColor:"#fff"
        
        
      },
    }

  }));

  export default useStyles;