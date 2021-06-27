import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'red',
      color: props => props.color,
        
    },
    home: {
        color: theme.palette.secondary.dark
    }
  }));

  export default useStyles;