
import useStyles from './styles';


//-------------------------------------

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Typography from '@material-ui/core/Typography';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
const CardImages = ({ property }) => {
    const { index, picture, carSpaces, city, bathrooms, bedrooms ,address} = property;
    const classes = useStyles();

  return (
      <div className={classes.root}>
        <img src={picture}></img> 
        <div className={classes.descricao}>
          <h1>{city}</h1>
          <div className={classes.endereco}>
            <h2>{address}</h2>
          </div>  
          <div className={classes.icones}>
            <div className={classes.icon}>
                <DirectionsCarIcon/> 
                {carSpaces}
            </div>
            <div className={classes.icon}>
                <BathtubIcon/> 
                {bathrooms}
            </div>
            <div className={classes.icon}>
                <HotelIcon/> 
                {bedrooms}
            </div>
            
            
          </div>
        </div> 
        
      </div>
  );
}
export default CardImages;
