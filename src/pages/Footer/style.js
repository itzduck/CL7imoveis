import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({

    footer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        background: "#7FFFD4",
        height:"250px",
        "& >  div": {
            /* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
            flex: 1,
            margin: "0px",
            textAlign: "center",
            fontSize: "1.5em",
          },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },

    },
    divLogo:{
        background: "#1981CD"
    }
}))

export default useStyles;