import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardUser = (props) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={props.producto.img}
          alt="imagen de producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.producto.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardUser;